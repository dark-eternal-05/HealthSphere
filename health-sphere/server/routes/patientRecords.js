const express = require("express")
const router = express.Router()
const PatientRecord = require("../models/PatientRecord")

router.get("/:address", async (req, res) => {
  try {
    const records = await PatientRecord.find({ patientAddress: req.params.address })
    res.json(records)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router

