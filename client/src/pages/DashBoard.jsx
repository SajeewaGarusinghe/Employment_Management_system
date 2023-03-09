import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getEmployees, reset } from '../features/employeeSlice';
import EmployeeForm from '../components/EmployeeForm';

import TableItems from './TableItems';
import Spinner from '../components/Spinner';

const DashBoard = () => {
  const dispatch = useDispatch();

  const { isLoading, isError, message, showForm } = useSelector(
    (state) => state.employee
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getEmployees());

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="my-flex-container">
      <div className="my-flex-item item-1">
        <TableItems />
      </div>

      {showForm && (
        <div className="my-flex-item item-2">
          <EmployeeForm />
        </div>
      )}
    </div>
  );
};

export default DashBoard;
