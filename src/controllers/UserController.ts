import express, { Request, Response, NextFunction } from 'express'; 
import { ServiceResponse } from '../services/ServiceResponse';
import { UserService } from '../services/UserService';

export async function createUser(request: Request, response: Response, next: NextFunction){
    let serviceResponse : ServiceResponse = await UserService.createUser(request.body);
    response.status(serviceResponse.code).json(serviceResponse.message);
};

export async function logIn(request: Request, response: Response, next: NextFunction){
    let serviceResponse : ServiceResponse = await UserService.logIn(request.body);
    response.status(serviceResponse.code).json(serviceResponse.message);
};

export async function logOut(request: Request, response: Response, next: NextFunction){
    let serviceResponse : ServiceResponse = await UserService.logOut(request.body.token);
    response.status(serviceResponse.code).json(serviceResponse.message);
};