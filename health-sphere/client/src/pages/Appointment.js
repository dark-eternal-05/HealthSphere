"use client"

import { useState, useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import axios from "axios"

function Appointment() {
  const { user } = useContext(AuthContext)
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [doctor, setDoctor] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("/api/appointment", { date, time, doctor })
      alert("Appointment booked successfully!")
      // Reset form
      setDate("")
      setTime("")
      setDoctor("")
    } catch (error) {
      console.error("Error booking appointment:", error)
      alert("Failed to book appointment. Please try again.")
    }
  }

  if (!user) {
    return <div>Please log in to book an appointment.</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Book an Appointment</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="date" className="block mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block mb-2">
            Time
          </label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="doctor" className="block mb-2">
            Doctor
          </label>
          <select
            id="doctor"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          >
            <option value="">Select a doctor</option>
            <option value="dr-smith">Dr. Smith</option>
            <option value="dr-johnson">Dr. Johnson</option>
            <option value="dr-williams">Dr. Williams</option>
          </select>
        </div>
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
          Book Appointment
        </button>
      </form>
    </div>
  )
}

export default Appointment

