import './App.css'
import {useAuthMutation} from "./store/services/grpcApi.ts";
import {AuthGrpcClient} from "../proto-gen/auth.client.ts";
import {GrpcWebFetchTransport} from "@protobuf-ts/grpcweb-transport";
import {AuthRequest} from "../proto-gen/auth_requests.ts";
import {UserType} from "../proto-gen/data_types.ts";
// import {GreeterClient} from "./store/proto/store/proto/hello_grpc_web_pb";
// import {HelloRequest} from "./store/proto/store/proto/hello_pb";

const transport = new GrpcWebFetchTransport({
    baseUrl: 'https://pre-dev.kassir.grpc.fox-dev.ru:8001/', // Укажите адрес вашего gRPC сервера
});

const grpcClient = new AuthGrpcClient(transport);

function App() {
    const [authFn] = useAuthMutation()

    const auth = ()=>{
        const authBody = AuthRequest.create({username: 'string',password: 'string',userType: UserType.agent})
        grpcClient.auth(authBody).then(res=>{
            console.log('res', res)
        }).catch(err => console.log('err', err))
        console.log('here')
    }
    const auth2 = ()=> {
        console.log('auth2')
        authFn({username: 'string',password: 'string'}).unwrap().then(data => console.log('data',data))
    }

  return (
      <div>
          <h1>gRPC Web Example</h1>
          <button onClick={auth2}>auth 2</button>
          <button onClick={auth}>auth</button>
      </div>
  )
}

export default App
