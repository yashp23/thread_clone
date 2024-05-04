import { NextRequest, NextResponse } from "next/server";
import { CustomSession, authOptions } from "../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import prisma from "@/DB/db.config";

export default async function POST(req: NextRequest) {
  const session: CustomSession | null = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ status: 401, message: "Un-Authorized" })
  }

  const payload: LikeType = await req.json()
  if (!payload.post_id || !payload.toUserId) {
    return NextResponse.json({ status: 401, message: "Bad Request" })
  }
  if (payload.status == "1") {
    await prisma.notification.create({
      data: {
        user_id: Number(session.user?.id),
        toUser_id: Number(payload.toUserId),
        content: "Liked your post",

      }
    })

    //increase the post like count
    await prisma.post.update({
      where: {
        id: Number(payload.post_id),
      },
      data: {
        likes_count: {
          increment: 1,
        },
      }
    });

    await prisma.likes.create({
      data: {
        post_id: Number(payload.post_id),
        user_id: Number(session.user?.id),
      }
    })
  } else if (payload.status == "0") {
    await prisma.post.update({
      where: {
        id: Number(payload.post_id),
      },
      data: {
        likes_count: {
          decrement: 1,
        },
      }
    });
    await prisma.likes.deleteMany({
      where: {
        post_id: Number(payload.post_id),
        user_id: Number(session.user?.id),
      }
    })
  }

  return NextResponse.json({ status: 200, message: payload.status == "1" ? "Post Liked successfully" : "Post Disliked Successfully" })


}