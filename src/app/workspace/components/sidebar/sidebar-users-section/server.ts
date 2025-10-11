import { prisma } from "@/lib/prisma";
import { Participants } from "./types";

export default async function GetParticipants(): Promise<Participants[]> {
    const participants = await prisma.users.findMany({
        select: {id: true, username: true}
    });

    return participants.map(p =>({
        id: p.id,
        username: p.username
    }));
}