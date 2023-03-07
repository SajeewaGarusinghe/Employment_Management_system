import React, { useState, useEffect } from 'react';
import Pagination from '../components/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import Table from './Table';
import { setPage } from '../features/employeeSlice';
import SelectType from './SelectType';

const Tabel_Pagination = () => {
  // To hold the actual employees

  const dispatch = useDispatch();
  const { displayEmployees,employeeType,employees } = useSelector((state) => state.employee);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);

  useEffect(() => {
    dispatch(setPage(currentRecords));
  }, [currentPage, dispatch,employeeType,employees]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = displayEmployees.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(displayEmployees.length / recordsPerPage);

  return (
    <div className="dashbord">
      <SelectType />
      <div className="container mt-5">
        <Table />
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Tabel_Pagination;
