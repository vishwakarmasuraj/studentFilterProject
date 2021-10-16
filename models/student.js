const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dateOfAdmission: {
        type: Date,
        required: true
    },
    dateOfEnd: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true
    }
    
}, {timestamps: true})

module.exports = mongoose.model('studentSchema', studentSchema)