"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone } from "lucide-react"

export default function DoctorOnCallPage() {
  const [specialty, setSpecialty] = useState("")
  const [callStatus, setCallStatus] = useState("idle") // idle, calling, connected

  const handleCall = () => {
    if (!specialty) {
      alert("Please select a specialty first")
      return
    }
    setCallStatus("calling")
    // Simulate connecting to a doctor
    setTimeout(() => {
      setCallStatus("connected")
    }, 3000)
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Doctor on Call</CardTitle>
        <CardDescription>Connect with a doctor via VoIP for quick consultations</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label htmlFor="specialty" className="block text-sm font-medium mb-2">
            Select Specialty
          </label>
          <Select onValueChange={setSpecialty}>
            <SelectTrigger id="specialty">
              <SelectValue placeholder="Choose a specialty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">General Practitioner</SelectItem>
              <SelectItem value="pediatrics">Pediatrics</SelectItem>
              <SelectItem value="cardiology">Cardiology</SelectItem>
              <SelectItem value="dermatology">Dermatology</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {callStatus === "connected" && (
          <div className="text-center text-green-600">Connected to Dr. Johnson (General Practitioner)</div>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={handleCall} className="w-full" disabled={callStatus !== "idle"}>
          {callStatus === "idle" && (
            <>
              <Phone className="mr-2 h-4 w-4" /> Call Doctor
            </>
          )}
          {callStatus === "calling" && "Connecting..."}
          {callStatus === "connected" && "End Call"}
        </Button>
      </CardFooter>
    </Card>
  )
}

