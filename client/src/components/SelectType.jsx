import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setType, setShowForm } from '../features/employeeSlice';
const SelectType = () => {
  const [employeeType, setEmployeeType] = useState('');
  const {showForm }= useSelector((state) => state.employee);
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
            {showForm?"Hide Form":"Add People"}
             
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectType;
