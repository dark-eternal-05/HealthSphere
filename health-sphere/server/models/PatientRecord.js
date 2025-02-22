const mongoose = require("mongoose")

const PatientRecordSchema = new mongoose.Schema({
  patientAddress: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  doctor: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model("PatientRecord", PatientRecordSchema)

