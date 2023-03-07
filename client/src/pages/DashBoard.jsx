import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '../components/Pagination';
import { getEmployees, reset } from '../features/employeeSlice';
import EmployeeForm from './EmployeeForm';
import SelectType from './SelectType';
import Table from './Table';

const DashBoard = () => {
  const dispatch = useDispatch();

  const { isLoading, isError, message } = useSelector(
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

  return (
    <div>
      <div className="dashbord">
        <SelectType />
        <Table />
      </div>
      

      <EmployeeForm />
    </div>
  );
};

export default DashBoard;
