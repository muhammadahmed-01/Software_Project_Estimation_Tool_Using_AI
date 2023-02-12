import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";

export default function PendingTasks(){
  return (
    <React.Fragment>
      <Typography variant={"h4"} sx={{marginLeft: "1%", marginBottom: "1%"}}>Pending Tasks</Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Task Name</TableCell>
            <TableCell>Skill</TableCell>
            <TableCell>Complexity</TableCell>
            <TableCell align="right">Estimated Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/*{rows.map((row) => (*/}
            <TableRow>
              <TableCell>Task 1</TableCell>
              <TableCell>2</TableCell>
              <TableCell>3</TableCell>
              <TableCell align="right">4h</TableCell>
            </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell align="right">4h</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell align="right">4h</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell align="right">4h</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell align="right">4h</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell align="right">4h</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell align="right">4h</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell align="right">4h</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell align="right">4h</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell align="right">4h</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell align="right">4h</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell align="right">4h</TableCell>
          </TableRow>
          {/*))}*/}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}