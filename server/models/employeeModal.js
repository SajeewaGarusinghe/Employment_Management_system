const mongoose = require('mongoose');

// const employeeSchema = mongoose.Schema(
//   {
//     fullName: {
//       type: String,
//       required: [true, 'please enter full name'],
//     },

//     email: {
//       type: String,
//       required: [true, 'please enter a email'],
//       unique: true,
//     },
//   },
//   {
//     timestamps: true, //to create updated and created at field automatically
//   }
// );
const employeeSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'please enter full name'],
    },
    nameWithInitial: {
      type: String,
      required: [true, 'please enter Name with initial'],
    },
    displayName: {
      type: String,
      required: [true, 'please enter Display name'],
    },
    gender: {
      type: String,
      required: [true, 'please enter Display name'],
    },
    birthday: {
      type: Date,
      required: [true, 'Please enter valid birthday'],
    },
    email: {
      type: String,
      required: [true, 'please enter a email'],
      unique: true,
    },
    mobileNo: {
      type: String,
      required: [true, 'please enter valid phone number'],
    },
    designation: {
      type: String,
      required: [true, 'please enter valid designation'],
    },
    employeeType: {
      type: String,
      required: [true, 'please enter valid employee type'],
    },
    joinedDate: {
      type: Date,
      required: [true, 'Please enter valid date'],
    },
    experience: {
      type: String,
      required: [true, 'Please enter valid experience'],
    },
    salary: {
      type: String,
      required: [true, 'Please enter salary'],
    },
    notes: {
      type: String,
      required: [true, 'Please enter note'],
    },
  },
  {
    timestamps: true, //to create updated and created at field automatically
  }
);

module.exports = mongoose.model('Employee', employeeSchema);
