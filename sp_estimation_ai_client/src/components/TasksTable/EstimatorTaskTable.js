/* eslint react/prop-types: 0 */
import { Table, TableCell, TableHead, TableBody, TableRow } from "@mui/material";
import * as React from "react";
import EstimatorTaskTableRow from "./EstimatorTaskTableRow"

const TasksTable = ({ data, hideComment }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Task Name</TableCell>
          <TableCell>Skill</TableCell>
          <TableCell>Complexity</TableCell>
          {
           hideComment ? (
             <></>
           ) : (
              <TableCell>Comments</TableCell>
             )
          }
          <TableCell align="right">Estimated Time</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {data.map((rowData) => (
        <EstimatorTaskTableRow key={rowData.id} data={rowData} hideComment={hideComment} />
      ))}
      </TableBody>
    </Table>
  );
};

export default TasksTable;