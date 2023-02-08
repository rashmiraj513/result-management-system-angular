const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  rollNo: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  score: {
    type: String,
    required: true
  }
});

const teacherSchema = new mongoose.Schema({ 
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    requird: true
  }
});

exports.teacher = teacherSchema;
exports.student = studentSchema;