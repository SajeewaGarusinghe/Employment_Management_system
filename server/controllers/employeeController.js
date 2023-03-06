const Employee = require('../models/employeeModal');
const asyncHandler = require('express-async-handler');

// @desc    Get employees
// @route   GET /api/employees
// @access  Public
const getEmployees = asyncHandler(async (req, res) => {
  res.status(200).json('get all employees');
});

// @desc    Set employees
// @route   POST /api/employees
// @access  Public
const setEmployee = asyncHandler(async (req, res) => {
  res.status(200).json('set employees');
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
