import express, { Request, Response, NextFunction } from 'express'; 
import { SessionRepository } from '../repositories/SessionRepository';
import { Interfaces } from '../interfaces/Interfaces';


export async function sessionValidator(request: Request, response: Response, next: NextFunction) {

    let sessionValid = false;

    if(request.body !== undefined && request.body.token !== undefined){
                
        let session : Interfaces.Session | null = await SessionRepository.getSession(request.body.token);

        // TODO check session expiration time
        if(session != null){

            console.log(request.method + ' ' + session.userId);

            request.body.userId = session.userId;
            sessionValid = true;
            next();
        }else
            console.log('Invalid token');
    } 

    if(!sessionValid)
        response.status(401).json('Unauthorized');
}