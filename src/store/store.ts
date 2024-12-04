import { configureStore } from '@reduxjs/toolkit';
import grpcApi from './services/grpcApi';

export const store = configureStore({
    reducer: {
        [grpcApi.reducerPath]: grpcApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(grpcApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;