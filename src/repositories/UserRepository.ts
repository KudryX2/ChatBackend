const BCRYPT = require('bcrypt');
const DATABASE = require('../database/Database');

import {Interfaces} from "../interfaces/Interfaces";


export module UserRepository{

    const tableName : string = "user";

    export async function insertUser(userCredentials : Interfaces.UserCredentials){
        await DATABASE
            .table(tableName)
            .insert(
                {
                    userName : userCredentials.userName,
                    password : BCRYPT.hashSync(userCredentials.password, 10)
                }
            );
    }

    export async function getUser(userName : string) : Promise<Interfaces.User | null>{
        return await DATABASE
            .select()
            .table(tableName)
            .where('userName', userName)
            .first();
    }

}