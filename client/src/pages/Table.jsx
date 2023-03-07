import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEmployee, setEdit } from '../features/employeeSlice';

const Table = () => {
  const { displayEmployees } = useSelector((state) => state.employee);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {};
  }, [displayEmployees]);

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Display Name</th>
            <th scope="col">Emp ID</th>
            <th scope="col">Designation</th>
            <th scope="col">Emp Type</th>
            <th scope="col">Experience</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {displayEmployees.map((employee) => (
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
