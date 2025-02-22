const express = require("express")
const router = express.Router()
const auth = require("../middleware/auth")

router.post("/", auth, async (req, res) => {
  try {
    // Here you would typically save the appointment to the database
    // For this example, we'll just send a success response
    res.status(201).send({ message: "Appointment booked successfully" })
  } catch (error) {
    res.status(400).send(error)
  }
})

module.exports = router

