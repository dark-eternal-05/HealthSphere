"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const mockRecords = [
  {
    id: 1,
    date: "2023-01-15",
    type: "General Checkup",
    doctor: "Dr. Smith",
    notes: "Patient is in good health. Recommended annual follow-up.",
  },
  {
    id: 2,
    date: "2023-03-22",
    type: "Blood Test",
    doctor: "Dr. Johnson",
    notes: "Cholesterol levels slightly elevated. Advised dietary changes.",
  },
  {
    id: 3,
    date: "2023-05-10",
    type: "X-Ray",
    doctor: "Dr. Williams",
    notes: "No abnormalities detected in chest X-ray.",
  },
  {
    id: 4,
    date: "2023-07-05",
    type: "Vaccination",
    doctor: "Dr. Brown",
    notes: "Administered annual flu vaccine. No adverse reactions.",
  },
]

export default function PatientRecordsPage() {
  const [selectedRecord, setSelectedRecord] = useState(null)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Patient Records</CardTitle>
          <CardDescription>View and manage your medical history</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Doctor</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockRecords.map((record) => (
                <TableRow key={record.id}>
                  <TableCell>{record.date}</TableCell>
                  <TableCell>{record.type}</TableCell>
                  <TableCell>{record.doctor}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" onClick={() => setSelectedRecord(record)}>
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            {record.type} - {record.date}
                          </DialogTitle>
                          <DialogDescription>Doctor: {record.doctor}</DialogDescription>
                        </DialogHeader>
                        <div className="mt-4">
                          <h4 className="font-semibold">Notes:</h4>
                          <p>{record.notes}</p>
                        </div>
                      </DialogContent>
                    </Dialog>
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

