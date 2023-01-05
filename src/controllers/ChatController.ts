import express, { Request, Response, NextFunction } from 'express'; 

import {ChatService} from '../services/ChatService';
import { ServiceResponse } from '../services/ServiceResponse';

export async function createChat(request: Request, response: Response, next: NextFunction){
    let serviceResponse : ServiceResponse = await ChatService.createChat(request.body.chatName, request.body.userId);
    response.status(serviceResponse.code).json(serviceResponse.message);
}

export async function deleteChat(request: Request, response: Response, next: NextFunction){
    ChatService.deleteChat(request.body.chatId);
    response.status(200).json('Delete chats TODO');
}

export async function listChats(request: Request, response: Response, next: NextFunction){
    ChatService.listChats(request.body.userId);
    response.status(200).json('List chats TODO');
}
