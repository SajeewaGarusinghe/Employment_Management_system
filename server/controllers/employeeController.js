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
  if (!req.body) {
    res.status(400);
    throw new Error('Please add a text field');
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
  });

  res.status(200).json(employee);
});

// @desc    update employee
// @route   PUT/api/employees/:id
// @access  Public
const updateEmployee = asyncHandler(async (req, res) => {
  res.status(200).json('update employees');
});

// @desc    delete employee
// @route   DELETE/api/employees/:id
// @access  Public
const deleteEmployee = asyncHandler(async (req, res) => {
  res.status(200).json('delete employees');
});

module.exports = {
  getEmployees,
  setEmployee,
  updateEmployee,
  deleteEmployee,
};
