import React from "react";
import TableHearder from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns, sortColumn, onSort, data }) => {
  return (
    <table className="table">
      <TableHearder columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;

// TODO: Clean up other common components to above technique
// const Table = props => {
//   const { columns, sortColumn, onSort, data } = props;
