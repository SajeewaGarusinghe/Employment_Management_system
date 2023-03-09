import React, { useState, useEffect } from 'react';
import Pagination from '../components/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import Table from '../components/Table';
import { setPage } from '../features/employeeSlice';
import SelectType from '../components/SelectType';

const TabelItem = () => {
  // To hold the actual employees

  const dispatch = useDispatch();
  const { displayEmployees } = useSelector((state) => state.employee);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);

  useEffect(() => {
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = displayEmployees.slice(
      indexOfFirstRecord,
      indexOfLastRecord
    );
    dispatch(setPage(currentRecords));
  }, [currentPage, dispatch, displayEmployees, recordsPerPage]);

  const nPages = Math.ceil(displayEmployees.length / recordsPerPage);

  return (
    <>
      <div className="item-heading">People</div>
      <div className="right-align-container">
        <SelectType />
      </div>

      <Table />
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default TabelItem;
