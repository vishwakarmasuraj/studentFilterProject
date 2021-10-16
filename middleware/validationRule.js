const { body } = require('express-validator')
const Student = require('./../models/student')

const validationRule = () => {
  return [
    body('studentName').notEmpty(),
    body('email')
      .isEmail()
      .custom((value) => {
        return Student.findOne({ email: value }).then((data) => {
          if (data) {
            return Promise.reject('email is already exist')
          }
        })
      }),
    body('password').isLength({ min: 6 }),
    body('dateOfAdmission').notEmpty(),
    body('dateOfEnd').notEmpty(),
    body('status').notEmpty()
  ]
}

module.exports = { validationRule }
