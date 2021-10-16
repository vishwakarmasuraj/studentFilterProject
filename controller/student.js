const Student = require('../models/student')
const constants = require('./../constant/student')
const {successHandler, errorHandler} = require('./../helper/responseHandler')
const bcrypt = require('bcrypt')


const addStudent = async (req, res) => {
    try {
        req.body.password = bcrypt.hash(req.body.password, constants.ROUND)
        const student = await new Student(req.body)
        await student.save()
        successHandler(res, constants.CREATE_MSG)
    } catch (error) {
        console.error(error)
        errorHandler(res)
    }
}

const studentListing = async (req,  res) => {
    try {
        const result = await Student.findAll({})
        successHandler(res, constants.LIST_MSG)
    } catch (error) {
        console.error(error)
        errorHandler(res)
    }
}

module.exports = {addStudent, studentListing}