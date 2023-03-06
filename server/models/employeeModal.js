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
      required: [false, 'please enter Display name'],
    },
    gender: {
      type: String,
      required: [false, 'please enter Display name'],
    },
    birthday: {
      type: Date,
      required: [false, 'Please enter valid birthday'],
    },
    email: {
      type: String,
      required: [true, 'please enter a email'],
      unique:  true,
    },
    mobileNo: {
      type: String,
      required: [false, 'please enter valid phone number'],
    },
    designation: {
      type: String,
      required: [false, 'please enter valid designation'],
    },
    employeeType: {
      type: String,
      required: [false, 'please enter valid employee type'],
    },
    joinedDate: {
      type: Date,
      required: [false, 'Please enter valid date'],
    },
    experience: {
      type: String,
      required: [false, 'Please enter valid experience'],
    },
    salary: {
      type: String,
      required: [false, 'Please enter salary'],
    },
    notes: {
      type: String,
      required: [false, 'Please enter note'],
    },
    employeeId: {
      type: Number,
    },
  },
  {
    timestamps: true, //to create updated and created at field automatically
  }
);



module.exports = mongoose.model('Employee', employeeSchema);
