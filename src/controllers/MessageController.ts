import express, { Request, Response, NextFunction } from 'express'; 

import {MessageService} from '../services/MessageService';
import {Interfaces} from '../interfaces/Interfaces';


export async function createMessage(request: Request, response: Response, next: NextFunction){
    request.body.message.senderId = request.body.userId;
    MessageService.createMessage(request.body.message);
    response.status(200).json('Mensaje enviado correctamente');
}

export async function deleteMessage(request: Request, response: Response, next: NextFunction){
    MessageService.deleteMessage();
    response.status(200).json('TODO');
}   

export async function listMessages(request: Request, response: Response, next: NextFunction){
    let messagesList : Interfaces.Message[] = MessageService.listMessages();
    response.status(200).json(messagesList);
}