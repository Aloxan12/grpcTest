import { useState} from 'react'
import './App.css'
import {GreeterClient} from "../hello.client.ts";
import {HelloRequest} from "../hello.ts";
import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';

const transport = new GrpcWebFetchTransport({
    baseUrl: 'http://127.0.0.1:50051', // адрес вашего сервера
});
// Создаем экземпляр клиента, передаем transport
const grpcClient = new GreeterClient(transport);

function App() {
    const [response, setResponse] = useState<string>('');
    const [greeting, setGreeting] = useState<string>('');

    const sendMessage = () => {
        // Используйте create() для создания запроса
        const request = HelloRequest.create({ name: greeting });

        grpcClient.sayHello(request).then((res) => {
            console.log('res', res)
            // setResponse(res.getMessage());
        }).catch((err) => {
            console.error('Error:', err);
            setResponse('Error occurred');
        });
    };

  return (
      <div>
          <h1>gRPC Web Example</h1>
          <input
              type="text"
              value={greeting}
              onChange={(e) => setGreeting(e.target.value)}
              placeholder="Enter greeting"
          />
          <button onClick={sendMessage}>Send Message</button>
          <div>{response && <p>Response: {response}</p>}</div>
      </div>
  )
}

export default App
