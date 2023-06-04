import { WebSocketGateway, WebSocketServer, SubscribeMessage, ConnectedSocket, MessageBody} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'

@WebSocketGateway(
    {
        cors:{
          origin: '*',
        },
    })
export class EventsGateway{

    @WebSocketServer()
    server: Server;

    //Connection
    handleConnection(client: Socket){
        console.log(`client connected : ${client.id}`);
        
    }

     //Deconnection
     handleDisconnect (client: Socket){
        console.log(`client disconnected : ${client.id}`);
        
    }

    @SubscribeMessage('message ')
    handleMessage(client:any, payload:any):string{
        return ""
    }
    // Recevoir un message(s'abonner à un message)

    
    @SubscribeMessage('message ')
    handleEvent(@MessageBody() data: string, @ConnectedSocket() client: Socket,){
            //Envoyer un event
            this.server.emit("message", client.id, data)       
        }
    
    }
