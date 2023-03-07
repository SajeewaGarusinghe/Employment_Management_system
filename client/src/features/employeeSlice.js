import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import employeeService from './employeeService';

const initialState = {
  employees: [],
  employeeType: '',
  displayEmployees: [],
  editMode: false,
  editEmployee: '',
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// add new Employee
export const addEmployee = createAsyncThunk(
  'employees/add',
  async (employeeData, thunkAPI) => {
    try {
      return await employeeService.addEmployee(employeeData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get employees
export const getEmployees = createAsyncThunk(
  'employees/getAll',
  async (_, thunkAPI) => {
    try {
      return await employeeService.getEmployees();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete employee
export const deleteEmployee = createAsyncThunk(
  'employee/delete',
  async (employeeId, thunkAPI) => {
    try {
      return await employeeService.deleteEmployee(employeeId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// update employee
export const updateEmployee = createAsyncThunk(
  'employee/update',
  async (employee, thunkAPI) => {
    try {
      return await employeeService.updateEmployee(employee);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    reset: (state) => initialState,
    setType: (state, action) => {
      state.employeeType = action.payload;
      state.displayEmployees = state.employees.filter(
        (employee) => employee.employeeType == action.payload
      );
    },
    setEdit: (state, action) => {
      state.editMode = true;
      state.editEmployee = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.employees.push(action.payload);
      })
      .addCase(addEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.editMode=false;
        state.editEmployee='';
        console.log([...state.employees,action.payload]);
        // state.employees=[...state.employees,action.payload]
        // state.employees.push(action.payload);
      })
      .addCase(updateEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getEmployees.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEmployees.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.employees = action.payload;
        state.displayEmployees = action.payload;
      })
      .addCase(getEmployees.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.employees = state.employees.filter(
          (employee) => employee._id !== action.payload.id
        );
        state.displayEmployees = state.employees;
      })
      .addCase(deleteEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, setType, setEdit } = employeeSlice.actions;
export default employeeSlice.reducer;
