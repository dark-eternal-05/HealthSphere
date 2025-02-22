const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const authRouter = require("./routes/auth")
const patientRecordsRouter = require("./routes/patientRecords")
const appointmentRouter = require("./routes/appointment")

app.use("/api/auth", authRouter)
app.use("/api/patient-records", patientRecordsRouter)
app.use("/api/appointment", appointmentRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

