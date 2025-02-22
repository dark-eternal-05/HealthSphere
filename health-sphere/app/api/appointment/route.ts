import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/db"
import Appointment from "@/models/Appointment"
import { authMiddleware } from "@/lib/authMiddleware"

export async function POST(request: Request) {
  try {
    const user = await authMiddleware(request)
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { date, time, doctor } = await request.json()
    await connectToDatabase()

    const appointment = new Appointment({
      userId: user.id,
      date,
      time,
      doctor,
    })
    await appointment.save()

    return NextResponse.json({ message: "Appointment booked successfully" }, { status: 201 })
  } catch (error) {
    console.error("Appointment booking error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

