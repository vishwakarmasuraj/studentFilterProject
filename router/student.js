const express = require('express')
const router = express.Router()

// router.get('/add', (req, res) => {
//     res.status(200).json({msg: 'index done'})
// })


const studentValidationRule = require('../middleware/validationRule')
const studentValid = require('../middleware/valid')

const studentController = require('../controller/student')

router.post('/add', studentValidationRule.validationRule(), studentValid.validate, studentController.addStudent)

module.exports = router