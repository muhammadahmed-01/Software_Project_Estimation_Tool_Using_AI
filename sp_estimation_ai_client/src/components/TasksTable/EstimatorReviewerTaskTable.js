/* eslint react/prop-types: 0 */
import { Table, TableCell, TableHead, TableBody, TableRow } from "@mui/material";
import * as React from "react";
import EstimationReviewerTaskTableRow from "./EstimationReviewerTaskTableRow"
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

const TasksTable = ({ data }) => {
  // console.log("data = ", data)

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Task Name</TableCell>
          <TableCell>Skill</TableCell>
          <TableCell>Complexity</TableCell>
          <TableCell>Assignee</TableCell>
          <TableCell>Status</TableCell>
          <TableCell align="right">Estimated Time</TableCell>
          <TableCell align="right">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {data.map((rowData) => (
        <EstimationReviewerTaskTableRow key={rowData.id} data={rowData} />
      ))}
      </TableBody>
    </Table>
  );
};

export default TasksTable;