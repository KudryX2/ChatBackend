import {Interfaces} from "../interfaces/Interfaces";
import { ServiceResponse } from '../services/ServiceResponse';
import { UserRepository } from "../repositories/UserRepository";
import { SessionRepository } from "../repositories/SessionRepository";
import { tokenToString } from "typescript";

const BCRYPT = require('bcrypt');


export module UserService{

    export async function createUser(userCredentials : Interfaces.UserCredentials) : Promise<ServiceResponse>{

        try{
            await UserRepository.insertUser(userCredentials);
            return new ServiceResponse(200, 'OK');
        }catch(exception){
            console.log('Error insertando usuario en la base de datos ' + exception);
            return new ServiceResponse(500, 'Server error');
        }

    }

    export async function logIn(userCredentials : Interfaces.UserCredentials) : Promise<ServiceResponse>{

        try{  
            let user : Interfaces.User | null = await UserRepository.getUser(userCredentials.userName);

            if(user != null)
                
                if(await BCRYPT.compare(userCredentials.password , user.password)){

                    // Checks if the user already has a session
                    let sessionToken : string | null = await SessionRepository.getToken(user.id);

                    if(sessionToken != null)    // Session exists -> Return stored token
                        return new ServiceResponse(200, sessionToken);
                    else{                       // No session -> Create, store and return new token
                        let newSessionToken : string = generateToken(50);
                        SessionRepository.insertSession(newSessionToken, user.id);
                        return new ServiceResponse(200, newSessionToken);
                    }
                }
                                                                 
            return new ServiceResponse(400, 'Crdenciales incorrectos');

        }catch(exception){
            console.log('Error comprobando las credenciales' + exception);
            return new ServiceResponse(500, 'Server error');
        }
    }

    export async function logOut(userToken : string) : Promise<ServiceResponse>{
        try{
            SessionRepository.removeSession(userToken);
            return new ServiceResponse(200, 'OK');
        }catch(exception){
            return new ServiceResponse(500, 'Server error');
        }
    }
    

    // Method used to generate a random User Session Token
    function generateToken(lenght : number) : string{
        let token : string = '';
        let elementsToUse : string = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIKLMNOPQRSTVXYZ';
    
        for(let i = 0 ; i < lenght ; ++i)
            token += elementsToUse.charAt(Math.floor(Math.random() * elementsToUse.length));
    
        return token;
    }

}