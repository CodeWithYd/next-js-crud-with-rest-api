import { NextResponse } from "next/server";
import { users, addUser } from "@/data-management";

export const GET = async()=> {
    try {

        return NextResponse.json({ message: 'OK', data: users}, { status: 200})

    } catch (err) {

        return NextResponse.json({ message: 'ERROR', err}, { status: 500})

    }
}


export const POST = async(req)=> {

    const { userName } = await req.json();

    try {
        addUser({id: Date.now().toString(), userName});
        
        return NextResponse.json({ message: 'SUCCESS'}, { status: 200})

    } catch (err) {

        return NextResponse.json({ message: 'ERROR', err}, { status: 500})

    }
}