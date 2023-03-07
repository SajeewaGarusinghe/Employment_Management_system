import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setType } from '../features/employeeSlice';
const SelectType = () => {
  const [employeeType, setEmployeeType] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setType(employeeType));

    return () => {
      dispatch(setType(''));
    };
  }, [employeeType, dispatch]);

  return (
    <div className="col-md-3">
      <select
        class="form-select"
        name="employeeType"
        id="employeeType"
        value={employeeType}
        onChange={(e) => {
          setEmployeeType(e.target.value);
        }}
      >
        <option value="Full time">Full time </option>
        <option value="Part time">Part time</option>
        <option value="Contract Basis">Contract Basis</option>
        <option value="Other">Other</option>
      </select>

      <button class="btn btn-primary" type="submit">
        Add People
      </button>
    </div>
  );
};

export default SelectType;