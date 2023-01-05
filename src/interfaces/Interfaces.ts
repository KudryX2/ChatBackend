export module Interfaces{
    
    export interface User{
        id : string,
        userName : string,
        password : string;
    }

    export interface UserCredentials{
        userName : string,
        password : string;
    }

    export interface Chat{
        name : string,
        id : string,
    }

    export interface Message{
        chatId : string,
        message : string;
    }

    export interface Session{
        token : string,
        userId : string,
        expiration : string;
    }

    export interface ChatUser{
        chatId : string,
        userId : string,
        role : string,
    }
}