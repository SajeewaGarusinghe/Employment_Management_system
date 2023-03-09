import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setType, setShowForm } from '../features/employeeSlice';
const SelectType = () => {
  const [employeeType, setEmployeeType] = useState('Employee Types');
  const { showForm } = useSelector((state) => state.employee);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setType(employeeType));

    return () => {
      dispatch(setType(''));
    };
  }, [employeeType, dispatch]);

  const addHandler = () => {
    dispatch(setShowForm(!showForm));
  };

  return (
    <>
      <div>
        <select
          className="form-select"
          name="employeeType"
          id="employeeType"
          value={employeeType}
          onChange={(e) => {
            setEmployeeType(e.target.value);
          }}
        >
          <option value="Employee Types">Employee Types</option>
          <option value="Full time">Full time </option>
          <option value="Part time">Part time</option>
          <option value="Contract Basis">Contract Basis</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <button className="btn btn-primary" type="submit" onClick={addHandler}>
          {showForm ? 'Hide Form' : 'Add People'}
        </button>
      </div>
    </>
  );
};

export default SelectType;
