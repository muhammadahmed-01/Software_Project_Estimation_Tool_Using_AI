/* eslint react/prop-types: 0 */
import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { TableRow, TableCell } from "@mui/material";

const EstimatorTaskTableRow = ({ data }) => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(data.column6);

  const handleDoubleClick = () => {
    setEditMode(true);
  };

  const handleBlur = () => {
    setEditMode(false);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <TableRow >
      <TableCell>{data.column1}</TableCell>
      <TableCell>{data.column2}</TableCell>
      <TableCell>{data.column3}</TableCell>
      <TableCell>{data.column4}</TableCell>
      <TableCell>{data.column5}</TableCell>
      <TableCell align="right" onDoubleClick={handleDoubleClick}>
        {editMode ? (
          <TextField value={value} autoFocus onBlur={handleBlur} onChange={handleChange} />
        ) : (
          <div onDoubleClick={handleDoubleClick}>{value}</div>
        )}
      </TableCell>
      <TableCell>
        TODO
        {/*show approve, reject and assign(display only if assignee is null) button here*/}
      </TableCell>
    </TableRow>
  );
};


export default EstimatorTaskTableRow;