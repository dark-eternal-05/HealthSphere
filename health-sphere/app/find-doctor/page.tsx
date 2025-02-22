"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const mockDoctors = [
  { id: 1, name: "Dr. Smith", specialty: "Cardiology", rating: 4.8, experience: 15 },
  { id: 2, name: "Dr. Johnson", specialty: "Pediatrics", rating: 4.9, experience: 20 },
  { id: 3, name: "Dr. Williams", specialty: "Dermatology", rating: 4.7, experience: 12 },
  { id: 4, name: "Dr. Brown", specialty: "General Practice", rating: 4.6, experience: 8 },
  { id: 5, name: "Dr. Davis", specialty: "Neurology", rating: 4.9, experience: 18 },
]

export default function FindDoctorPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [specialty, setSpecialty] = useState("")

  const filteredDoctors = mockDoctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (specialty === "" || doctor.specialty === specialty),
  )

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Find a Doctor</CardTitle>
          <CardDescription>Search and compare doctors based on performance parameters</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-4">
            <Input
              placeholder="Search by name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <Select onValueChange={setSpecialty}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Specialties</SelectItem>
                <SelectItem value="Cardiology">Cardiology</SelectItem>
                <SelectItem value="Pediatrics">Pediatrics</SelectItem>
                <SelectItem value="Dermatology">Dermatology</SelectItem>
                <SelectItem value="General Practice">General Practice</SelectItem>
                <SelectItem value="Neurology">Neurology</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Doctor List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Specialty</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Experience (Years)</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDoctors.map((doctor) => (
                <TableRow key={doctor.id}>
                  <TableCell>{doctor.name}</TableCell>
                  <TableCell>{doctor.specialty}</TableCell>
                  <TableCell>{doctor.rating}</TableCell>
                  <TableCell>{doctor.experience}</TableCell>
                  <TableCell>
                    <Button asChild>
                      <a href={`/appointment?doctor=${doctor.id}`}>Book Appointment</a>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

