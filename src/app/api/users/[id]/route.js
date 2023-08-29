import { NextResponse } from "next/server";
import { updateUser, deleteUser } from "@/data-management";


export const PUT = async(req)=> {
    const id = req.url.split('users/')[1];
    const { userName } = await req.json();

    try {
        updateUser({id, userName});
        return NextResponse.json({ message: 'UPDATE SUCCESS'}, { status: 200})

    } catch (err) {

        return NextResponse.json({ message: 'ERROR', err}, { status: 500})

    }
}


export const DELETE = async(req)=> {
    const id = req.url.split('users/')[1];

    try {
        deleteUser(id);
        return NextResponse.json({ message: 'DELETE SUCCESS'}, { status: 200})

    } catch (err) {
        
        return NextResponse.json({ message: 'ERROR', err}, { status: 500})

    }
}