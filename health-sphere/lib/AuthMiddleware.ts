import type { NextRequest } from "next/server"
import jwt from "jsonwebtoken"
import { connectToDatabase } from "./db"
import User from "@/models/User"

export async function authMiddleware(request: NextRequest) {
  const token = request.headers.get("Authorization")?.replace("Bearer ", "")

  if (!token) {
    return null
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string }
    await connectToDatabase()
    const user = await User.findById(decoded.userId).select("-password")
    return user
  } catch (error) {
    console.error("Auth middleware error:", error)
    return null
  }
}

