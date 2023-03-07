import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteEmployee,
  setEdit,
  setPage,
  setSortedData,
  setSortedData1,
} from '../features/employeeSlice';

const Table = () => {
  const { currentRecords, displayEmployees, employees } = useSelector(
    (state) => state.employee
  );

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {};
  }, [currentRecords, displayEmployees, employees]);

  const nameSortHandler = () => {
    let temp = [...employees];
    temp.sort((a, b) => {
      let fa = a.displayName.toLowerCase(),
        fb = b.displayName.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    dispatch(setSortedData(temp));

    let temp1 = [...displayEmployees];
    temp1.sort((a, b) => {
      let fa = a.displayName.toLowerCase(),
        fb = b.displayName.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    dispatch(setSortedData1(temp1));
    // console.log(temp);
  };

  const IdSortHandler = () => {
    let temp = [...employees];
    temp.sort((a, b) => a.employeeId - b.employeeId);
    dispatch(setSortedData(temp));
    let temp1 = [...displayEmployees];
    temp1.sort((a, b) => a.employeeId - b.employeeId);
    dispatch(setSortedData1(temp1));
    // console.log(temp);
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">
              Display Name{' '}
              <button onClick={nameSortHandler} class="btn btn-secondary">
                sort{' '}
              </button>
            </th>
            <th scope="col">
              Emp ID{' '}
              <button onClick={IdSortHandler} class="btn btn-secondary">
                {' '}
                sort{' '}
              </button>
            </th>
            <th scope="col">Designation</th>
            <th scope="col">Emp Type</th>
            <th scope="col">Experience</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((employee) => (
            <tr key={employee._id}>
              <th scope="row">{employee.displayName}</th>
              <td>{employee.employeeId}</td>
              <td>{employee.designation}</td>
              <td>{employee.employeeType}</td>
              <td>{employee.experience}</td>
              <td>
                <button
                  className="btn"
                  style={{ color: 'blue' }}
                  onClick={() => {
                    dispatch(setEdit(employee));
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn"
                  style={{ color: 'red' }}
                  onClick={() => {
                    console.log(employee._id);
                    dispatch(deleteEmployee(employee._id));
                  }}
                >
                  delete
                </button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
