const Student = require('../models/student')
const constants = require('./../constant/student')
const {successHandler, errorHandler} = require('./../helper/responseHandler')
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
        const result = await Student.find({})
        successHandler(res, constants.STD_AVAIL_MSG, result)
    } catch (error) {
        console.error(error)
        errorHandler(res)
    }
}


module.exports = {addStudent, studentListing, studentFilterRecord}