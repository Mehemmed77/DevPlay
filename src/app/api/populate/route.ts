import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const data = {
            username: "mehemmed",
            password: "maqa123"
        };

        const user = await prisma.users.create({
            data: data
        })

        return NextResponse.json({ success: true, user });
    }

    catch(e: any) {
        console.error(e);
        return NextResponse.json({ success: false, error: e }, { status: 500 });
    }
}