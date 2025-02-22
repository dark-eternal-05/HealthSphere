"use client"

import type React from "react"

import { useState } from "react"
import { useAuth } from "@/context/AuthContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Appointment() {
  const { user } = useAuth()
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [doctor, setDoctor] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ date, time, doctor }),
      })
      if (response.ok) {
        alert("Appointment booked successfully!")
        setDate("")
        setTime("")
        setDoctor("")
      } else {
        throw new Error("Failed to book appointment")
      }
    } catch (error) {
      console.error("Error booking appointment:", error)
      alert("Failed to book appointment. Please try again.")
    }
  }

  if (!user) {
    return <div>Please log in to book an appointment.</div>
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Book an Appointment</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="date">Date</Label>
          <Input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="time">Time</Label>
          <Input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="doctor">Doctor</Label>
          <Select onValueChange={setDoctor} value={doctor}>
            <SelectTrigger>
              <SelectValue placeholder="Select a doctor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dr-smith">Dr. Smith</SelectItem>
              <SelectItem value="dr-johnson">Dr. Johnson</SelectItem>
              <SelectItem value="dr-williams">Dr. Williams</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit">Book Appointment</Button>
      </form>
    </div>
  )
}

