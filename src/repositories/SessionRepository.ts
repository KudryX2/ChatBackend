const BCRYPT = require('bcrypt');
const DATABASE = require('../database/Database');
const knexfile = require('../database/knexfile');
const knex = require('knex')(knexfile.development);

import {Interfaces} from "../interfaces/Interfaces";

export module SessionRepository{

    const tableName : string = 'session';

    export async function insertSession(token : string, userId : string){
        await DATABASE
            .table(tableName)
            .insert(
                {
                    token : token,
                    userId : userId,
                    expiration : knex.fn.now()
                }
            );
    }

    export async function getToken(userId : string) : Promise<string | null> {
        return await DATABASE
            .select('token')
            .table(tableName)
            .where('userId', userId)
            .first();
    }

    export async function removeSession(token : string){
        await DATABASE
            .table(tableName)
            .where('token', token)
            .del();
    }

    export async function getSession(token : string) : Promise<Interfaces.Session | null> {
        return await DATABASE
            .select()
            .table(tableName)
            .where('token', token)
            .first();
    }
}