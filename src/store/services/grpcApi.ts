import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react';
// import { GreeterClient } from '../proto/hello_grpc_web_pb';
// import {HelloReply, HelloRequest} from "../proto/hello_pb";
//
//
// const grpcClient = new GreeterClient('https://grpcb.in', null, null);

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        // sayHello: builder.query<HelloReply, void>({
        //     async queryFn() {
        //         try {
        //             const request = new HelloRequest();
        //             // Настройте запрос, если нужно
        //             const response = await new Promise<HelloReply>((resolve, reject) => {
        //                 grpcClient.sayHello(request, {}, (err, res) => {
        //                     if (err) reject(err);
        //                     else resolve(res);
        //                 });
        //             });
        //             return { data: response };
        //         } catch (error) {
        //             return { error: { status: 'CUSTOM_ERROR', error } };
        //         }
        //     },
        // }),
    }),
});


export const {} = api;
export default api;