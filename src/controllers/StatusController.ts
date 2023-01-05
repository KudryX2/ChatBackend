import express, { Request, Response, NextFunction } from 'express'; 

export async function ping(request: Request, response: Response, next: NextFunction){
    response.status(200).json('pong');
};