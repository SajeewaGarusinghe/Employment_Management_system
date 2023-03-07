import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import employeeService from './employeeService';
import { original } from 'immer';

const initialState = {
  employees: [],
  employeeType: '',
  displayEmployees: [],
  currentRecords: [],
  editMode: false,
  editEmployee: '',
  showForm:false,
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
      state.showForm = true;
    },
    setPage: (state, action) => {
      state.currentRecords = action.payload;
    },
    setSortedData: (state, action) => {
      state.employees = action.payload;
    
    },
    setSortedData1: (state, action) => {
      state.displayEmployees = action.payload;
      
    },
    showForm: (state, action) => {
      state.showForm = action.payload;
      
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
        state.showForm = false;
        state.employees.push(action.payload);
        if (
          state.employeeType === action.payload.employeeType ||
          state.employeeType === ''
        ) {
          state.displayEmployees.push(action.payload);
        }
      })
      .addCase(addEmployee.rejected, (state, action) => {
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
        // console.log(state.employees);
        state.displayEmployees = action.payload;
      })
      .addCase(getEmployees.rejected, (state, action) => {
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
        state.editMode = false;
        state.editEmployee = '';
        const updatedEmployeeArr = original(state.employees).filter(
          (e) => e._id !== action.payload._id
        );
        state.employees = [...updatedEmployeeArr, action.payload];
        state.displayEmployees = state.employees;
        const updatedDisplayEmployee = state.displayEmployees.filter(
          (e) => e._id !== action.payload._id
        );
        state.displayEmployees = [...updatedDisplayEmployee, action.payload];
      })
      .addCase(updateEmployee.rejected, (state, action) => {
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
        state.showForm = false;
        state.employees = original(state.employees).filter(
          (employee) => employee._id !== action.payload._id
        );
        state.displayEmployees = original(state.displayEmployees).filter(
          (employee) => employee._id !== action.payload._id
        );
      })
      .addCase(deleteEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, setType, setEdit,setPage,setSortedData,setSortedData1 ,showForm} = employeeSlice.actions;
export default employeeSlice.reducer;
