import {Interfaces} from '../interfaces/Interfaces';
import { ServiceResponse } from '../services/ServiceResponse';

export module MessageService {

    let messagesList : Interfaces.Message[] = [];
    
    export async function createMessage(message : Interfaces.Message) : Promise<ServiceResponse>{
        
        try{
            console.log('Create Message ' + message.chatId + ' ' + message.message);
            messagesList.push(message);
            return new ServiceResponse(200, 'OK');
        }catch(exception){
            console.log('Error creando el mensaje ' + exception);
            return new ServiceResponse(500, 'Error creando mensaje');
        }

    }

    export function deleteMessage(){
        console.log('delete message');
    }

    export function listMessages() : Interfaces.Message[]{
        return messagesList;
    }
}