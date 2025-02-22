"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { useWeb3React } from "@web3-react/core"

function PatientRecords() {
  const [records, setRecords] = useState([])
  const { account } = useWeb3React()

  useEffect(() => {
    if (account) {
      fetchRecords()
    }
  }, [account])

  async function fetchRecords() {
    try {
      const response = await axios.get(`/api/patient-records/${account}`)
      setRecords(response.data)
    } catch (error) {
      console.error("Error fetching patient records:", error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Patient Records</h1>
      {records.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {records.map((record) => (
            <div key={record._id} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2">{record.type}</h2>
              <p className="text-gray-600 mb-2">Date: {new Date(record.date).toLocaleDateString()}</p>
              <p className="text-gray-600 mb-2">Doctor: {record.doctor}</p>
              <p className="text-gray-700">{record.notes}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-xl text-gray-600">No records found.</p>
      )}
    </div>
  )
}

export default PatientRecords

