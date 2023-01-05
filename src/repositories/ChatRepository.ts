const DATABASE = require('../database/Database');
const knexfile = require('../database/knexfile');
const knex = require('knex')(knexfile.development);

import {Interfaces} from "../interfaces/Interfaces";
import { ChatRole } from "../services/Consants";

export module ChatRepository{

    const chatTable : string = 'chat';
    const chatUser : string = 'chatUser';

    export async function insertChat(chatName : string) : Promise<string | null>{
        let id : string = (await DATABASE
            .table(chatTable)
            .insert(
                {
                    name : chatName
                }
            )
            .returning('id')
        )[0];
               
        return Object.values(id)[0];
    }

    export async function addUser(chatId : string, userId : string, role : ChatRole) {
        await DATABASE
            .table(chatUser)
            .insert(
                {
                    chatId : chatId,
                    userId : userId,
                    role : role
                }
            );
    }

    export async function listChats(userId : string) : Promise<Interfaces.ChatUser | null>{
        return await DATABASE
            .select()
            .table(chatUser)
            .where('userId', userId);
    }





}