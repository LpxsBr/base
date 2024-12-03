import { NextRequest, NextResponse } from "next/server";
import { Database } from '@/app/database';
import { hashSync, genSaltSync } from 'bcrypt'

export async function POST(req: NextRequest) {

    const { username, password, confirm_password } = await req.json()

    const db = new Database()

    await db.begin()

    try {

        if(password !== confirm_password){
            throw Error('Senhas não conferem')
        }

        const salt = genSaltSync(10, 'b');

        const hashedPass = hashSync(password, salt)

        const item = await db.query('insert into users(username, password) values ($1, $2)', [username, hashedPass])
    
        await db.save()
        return NextResponse.json(item.rows)
        
    } catch (error: any) {
        
        await db.rollback();
        return NextResponse.json({error: error.message}, {status: 403})
    }


}