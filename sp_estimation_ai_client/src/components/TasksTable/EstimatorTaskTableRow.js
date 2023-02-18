/* eslint react/prop-types: 0 */
import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { TableRow, TableCell } from "@mui/material";

const EstimatorTaskTableRow = ({ data, hideComment }) => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(data.column5);

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
      {hideComment ? (
        <></>
      ) : (
        <TableCell>{data.column4}</TableCell>
      )}
      <TableCell align="right" onDoubleClick={handleDoubleClick}>
        {editMode ? (
          <TextField value={value} autoFocus onBlur={handleBlur} onChange={handleChange} />
        ) : (
          <div onDoubleClick={handleDoubleClick}>{value}</div>
        )}
      </TableCell>
    </TableRow>
  );
};


export default EstimatorTaskTableRow;