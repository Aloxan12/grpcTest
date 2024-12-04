// server.js
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

// Загружаем файл .proto
const packageDefinition = protoLoader.loadSync('./src/store/proto/hello.proto');
const helloProto = grpc.loadPackageDefinition(packageDefinition).hello;

// Функция обработки запроса
const sayHello = (call, callback) => {
    callback(null, { message: 'Hello, ' + call.request.name });
};

// Создаем gRPC сервер
const server = new grpc.Server();
server.addService(helloProto.Greeter.service, { sayHello: sayHello });
server.bindAsync('127.0.0.1:50051', grpc.ServerCredentials.createInsecure(), () => {
    console.log('Server running at http://127.0.0.1:50051');
    server.start();
});
