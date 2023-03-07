import axios from 'axios';

const API_URL = '/api/employees/';

// Add new Employee
const addEmployee = async (employeeData) => {
  console.log(employeeData);
  const response = await axios.post(API_URL, employeeData);

  return response.data;
};
// Update employee
const updateEmployee = async (employee) => {
  console.log(employee);
  const response = await axios.put(API_URL + employee._id, employee);

  return response.data;
};

// Get employee details
const getEmployees = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

// Delete employee
const deleteEmployee = async (employeeId) => {
  const response = await axios.delete(API_URL + employeeId);

  return response.data;
};

const employeeService = {
  addEmployee,
  getEmployees,
  deleteEmployee,
  updateEmployee,
};

export default employeeService;
