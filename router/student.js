const express = require('express')
const router = express.Router()

const studentValidationRule = require('../middleware/validationRule')
const studentValid = require('../middleware/valid')

const studentController = require('../controller/student')

router.post('/add', studentValidationRule.validationRule(), studentValid.validate, studentController.addStudent)

router.get('/list', studentController.studentListing)
 
router.get('/findDate', studentController.studentFilterRecord)

module.exports = router