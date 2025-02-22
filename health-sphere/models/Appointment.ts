import mongoose from "mongoose"

const AppointmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  doctor: { type: String, required: true },
})

export default mongoose.models.Appointment || mongoose.model("Appointment", AppointmentSchema)

