import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setType, showForm } from '../features/employeeSlice';
const SelectType = () => {
  const [employeeType, setEmployeeType] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setType(employeeType));

    return () => {
      dispatch(setType(''));
    };
  }, [employeeType, dispatch]);

  const addHandler = () => {
    dispatch(showForm(true));
  };

  return (
    <div>
      <div className="row">
        <div className="col-2">
          <select
            className="form-select"
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
        </div>

        <div className="col-3">
          <button
            className="btn btn-primary"
            type="submit"
            onClick={addHandler}
          >
            Add People
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectType;
