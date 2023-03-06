const asyncHandler = require('express-async-handler');
const Employee = require('../models/employeeModal');

// @desc    Get employees
// @route   GET /api/employees
// @access  Public
const getEmployees = asyncHandler(async (req, res) => {
  const employees = await Employee.find();

  res.status(200).json(employees);
});

// @desc    Set employees
// @route   POST /api/employees
// @access  Public
const setEmployee = asyncHandler(async (req, res) => {

   console.log(">>>>");
   console.log(req.body);
  if (!req.body) {
    res.status(400);
    throw new Error('Please add a text field');
  }

  let newId;
  const employees = await Employee.find();
  if (employees == 0) {
    newId = 1;
  } else {
    //search for employee that have max id
    const maxIdEmployee = await Employee.findOne({}, null, {
      sort: { employeeId: -1 },
    });
    //increment max id by 1 to get new id
    newId = maxIdEmployee.employeeId + 1;
  }

  const employee = await Employee.create({
    fullName: req.body.fullName,
    nameWithInitial: req.body.nameWithInitial,
    displayName: req.body.displayName,
    gender: req.body.gender,
    birthday: req.body.birthday,
    email: req.body.email,
    mobileNo: req.body.mobileNo,
    designation: req.body.designation,
    employeeType: req.body.employeeType,
    joinedDate: req.body.joinedDate,
    experience: req.body.experience,
    salary: req.body.salary,
    notes: req.body.notes,
    employeeId: newId,
  });

  res.status(200).json(employee);
});

// @desc    update employee
// @route   PUT/api/employees/:id
// @access  Public
const updateEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  if (!employee) {
    res.status(404);
    throw new Error('Employee not found');
  }
  // console.log(`req.params.id =${req.params.id}    req.body=${req.body.fullName} `);
  const updatedEmployee = await Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      returnOriginal: false,
    }
  );

  res.status(200).json(updatedEmployee);
});

// @desc    delete employee
// @route   DELETE/api/employees/:id
// @access  Public
const deleteEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  if (!employee) {
    res.status(400);
    throw new Error('Employee not found');
  }

  await Employee.deleteOne({ _id: req.params.id });

  res.status(200).json(employee);
});

module.exports = {
  getEmployees,
  setEmployee,
  updateEmployee,
  deleteEmployee,
};
