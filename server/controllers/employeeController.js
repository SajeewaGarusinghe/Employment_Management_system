// @desc    Get employees
// @route   GET /api/employees
// @access  Public
const getEmployees = async (req, res) => {
  res.status(200).json('get all employees');
};

// @desc    Set employees
// @route   POST /api/employees
// @access  Public
const setEmployee = async (req, res) => {
  res.status(200).json('set employees');
};

// @desc    update employee
// @route   PUT/api/employees/:id
// @access  Public
const updateEmployee = async (req, res) => {
  res.status(200).json('update employees');
};

// @desc    delete employee
// @route   DELETE/api/employees/:id
// @access  Public
const deleteEmployee = async (req, res) => {
  res.status(200).json('delete employees');
};

module.exports = {
  getEmployees,
  setEmployee,
  updateEmployee,
  deleteEmployee,
};
