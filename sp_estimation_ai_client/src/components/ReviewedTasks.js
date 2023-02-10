import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import PropTypes from "prop-types";

export default function ReviewedTasks({status}){
  // console.log("Your passed status: ", status)
  return (
    <React.Fragment>
      <Typography variant={"h4"} sx={{marginLeft: "1%", marginBottom: "1%"}}>{status} Tasks</Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Task Name</TableCell>
            <TableCell>Skill</TableCell>
            <TableCell>Complexity</TableCell>
            <TableCell>Comments</TableCell>
            <TableCell align="right">Estimated Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/*{rows.map((row) => (*/}
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">4h</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">4h</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">4h</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">4h</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">4h</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">4h</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">4h</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell>good</TableCell>
            <TableCell align="right">4h</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">4h</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">4h</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">4h</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">4h</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">4h</TableCell>
          </TableRow>
          {/*))}*/}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}

ReviewedTasks.propTypes = {
  status: PropTypes.string.isRequired,
};