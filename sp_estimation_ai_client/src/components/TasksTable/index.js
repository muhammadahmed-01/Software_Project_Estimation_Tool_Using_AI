/* eslint react/prop-types: 0 */
import { Table, TableCell, TableHead, TableRow } from "@mui/material";
import * as React from "react";
import TaskTableRow from "./TaskTableRow"

const TasksTable = ({ data }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Task Name</TableCell>
          <TableCell>Skill</TableCell>
          <TableCell>Complexity</TableCell>
          <TableCell>Comments</TableCell>
          <TableCell align="right">Estimated Time</TableCell>
        </TableRow>
      </TableHead>
      <tbody>
      {data.map((rowData) => (
        <TaskTableRow key={rowData.id} data={rowData} />
      ))}
      </tbody>
    </Table>
  );
};

export default TasksTable;