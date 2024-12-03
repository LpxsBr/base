import { NextResponse } from "next/server";
import { Database } from "../database";

export async function GET() {

    const db = new Database()

    await db.begin()

    try {
        const item = await db.query('select * from teste')
    
        await db.rollback();
        // await db.save()
        return NextResponse.json(item.rows)
        
    } catch (error) {
        
        return NextResponse.json('teste')
    }


}