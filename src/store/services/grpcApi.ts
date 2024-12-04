import {BaseQueryFn, createApi, retry} from '@reduxjs/toolkit/query/react';
import {GrpcWebFetchTransport} from "@protobuf-ts/grpcweb-transport";
import type { RpcError } from '@protobuf-ts/runtime-rpc';
import {UserType} from "../../../proto-gen/data_types.ts";
import {AuthRequest} from "../../../proto-gen/auth_requests.ts";
import {AuthGrpcClient} from "../../../proto-gen/auth.client.ts";


interface GrpcBaseQueryArgs {
    service: any; // Тип сервиса, сгенерированного protobuf-ts
    method: keyof any; // Имя метода сервиса
    request: object; // Данные запроса
}

const transport = new GrpcWebFetchTransport({
    baseUrl: `${import.meta.env.baseUrl}`,
});

export const grpcBaseQuery: BaseQueryFn<GrpcBaseQueryArgs, unknown, RpcError> = async ({ service, method, request }) => {
    try {
        const client = new service(transport);
        const response = await client[method](request);
        return { data: response };
    } catch (error) {
        return { error: error as RpcError };
    }
};

const grpcBaseQueryWithRetry = retry(grpcBaseQuery, { maxRetries: 3 });

export const api = createApi({
    reducerPath: 'api',
    baseQuery: grpcBaseQueryWithRetry, // Используем нашу настроенную базу запросов
    endpoints: (builder) => ({
        auth: builder.mutation({
            query: ({ username, password }: { username: string; password: string }) => ({
                service: AuthGrpcClient,
                method: 'auth', // Имя метода gRPC
                request: AuthRequest.create({
                    username,
                    password,
                    userType: UserType.agent, // Укажите тип пользователя
                }),
            }),
        }),
    }),
});

// Используем хук для мутации
export const { useAuthMutation } = api;
export default api;