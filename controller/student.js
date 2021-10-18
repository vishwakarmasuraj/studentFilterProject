const Student = require('../models/student')
const constants = require('./../constant/student')
const { successHandler, errorHandler } = require('./../helper/responseHandler')
const bcrypt = require('bcrypt')

const addStudent = async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, constants.ROUND)
    const student = await new Student(req.body)
    await student.save()
    successHandler(res, constants.CREATE_MSG)
  } catch (error) {
    console.error(error)
    errorHandler(res)
  }
}

const studentListing = async (req, res) => {
  try {
    const result = await Student.find({})
    successHandler(res, constants.LIST_MSG, result)
  } catch (error) {
    console.error(error)
    errorHandler(res)
  }
}

const studentFilterRecord = async (req, res) => {
  try {
    let { startDate, endDate } = req.query
    if (startDate || endDate) {
      return res
        .status(400)
        .json({ message: 'please ensure you pick two dates' })
    }
    const result = await Student.find({
      dateOfAdmission: {
        $gte: new Date(startDate).setHours(00, 00, 00),
        $lt: new Date(endDate).setHours(23, 59, 59),
      },
    }).sort({ dateOfAdmission: 'asc' })
    res.status(200).json({ result })
  } catch (error) {
    console.error(error)
    res.status(500).json({ msg: 'something went wrong' })
  }
}

module.exports = { addStudent, studentListing, studentFilterRecord }
