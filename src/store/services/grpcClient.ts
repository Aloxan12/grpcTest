// import { grpc } from "@improbable-eng/grpc-web"; // или просто grpc-web, если используете его

// URL gRPC-сервера
// const grpcUrl = "http://localhost:8080"; // Поменяйте на свой сервер

// Создание клиента
// const client = new MyService(
//     grpcUrl,
//     grpc.WebsocketTransport(), // Для WebSocket транспорта
// );

// // Функция для отправки сообщения через gRPC
// export const sendMessage = (message: string): Promise<SendMessageResponse> => {
//     return new Promise((resolve, reject) => {
//         const request = new SendMessageRequest();
//         request.setMessage(message);
//
//         client.sendMessage(request, (error: any, response: SendMessageResponse) => {
//             if (error) {
//                 reject(error);
//             } else {
//                 resolve(response);
//             }
//         });
//     });
// };