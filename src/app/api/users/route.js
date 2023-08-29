import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";

export const GET = async()=> {
    try {
        await connectMongoDB();

        const users = await User.find();

        return NextResponse.json({ message: 'OK', data: users}, { status: 200})

    } catch (err) {

        return NextResponse.json({ message: 'ERROR', err}, { status: 500})

    }
}


export const POST = async(req)=> {

    const { userName } = await req.json();

    try {
        await connectMongoDB();
        await User.create({ userName });
        
        return NextResponse.json({ message: 'SUCCESS'}, { status: 200})

    } catch (err) {

        return NextResponse.json({ message: 'ERROR', err}, { status: 500})

    }
}