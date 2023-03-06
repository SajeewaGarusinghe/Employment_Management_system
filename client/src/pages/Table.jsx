import { useSelector } from 'react-redux';

const Table = () => {
  const { employees, displayEmployees,employeeType } = useSelector(
    (state) => state.employee
  );

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
                <button>Edit</button> <button>delete</button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
