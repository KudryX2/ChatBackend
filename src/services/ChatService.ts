import {Interfaces} from '../interfaces/Interfaces';
import { ChatRepository } from '../repositories/ChatRepository';
import { ServiceResponse } from './ServiceResponse';
import { ChatRole } from './Consants';


export module ChatService {

    export async function createChat(chatName : string, userId : string) : Promise<ServiceResponse> {

        try{
            // Create chat in the DB
            let chatId : string | null = await ChatRepository.insertChat(chatName);
            
            if(chatId != null)  // Chat created -> Add user
                return addUser(chatId, userId, ChatRole.owner);
            else
                return new ServiceResponse(500, 'Server error');

        }catch(exception){
            console.log('Error creando chat ' + exception);
            return new ServiceResponse(500, 'Server error');
        }
    }
    
    export async function addUser(chatId : string, userId : string, role : ChatRole) : Promise<ServiceResponse>{
        
        try{
            ChatRepository.addUser(chatId, userId, role);
            return new ServiceResponse(200, 'OK');
        }catch(exception){
            console.log('Error añadiendo el usuario ' + exception);
            return new ServiceResponse(500, 'Server error');
        }
        
    } 
    
    export function deleteChat(chatId : string){
        console.log('deleteChat');
    }

    export async function listChats(userId : string){
        
        try{
            let chatsList : Interfaces.ChatUser | null = await ChatRepository.listChats(userId);
        }catch(exception){

        }

    }


}