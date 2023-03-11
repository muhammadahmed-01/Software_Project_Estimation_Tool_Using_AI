/* eslint react/prop-types: 0 */
import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { TableRow, TableCell } from "@mui/material";
import EDService from "../../service/estimator.service"

const EstimatorTaskTableRow = ({ data, hideComment }) => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(data.time);

  const handleDoubleClick = () => {
    setEditMode(true);
  };

  const handleBlur = (taskID) => {
    setEditMode(false);
    updateEstimate(taskID)
  };

  // const handleKeyDown = (taskID) => (event) => {
  //   console.log("key down triggered")
  //   if (event.keyCode === 13) {
  //     console.log(" and enter was pressed")
  //     setEditMode(false);
  //     // updateEstimate(taskID)
  //   }
  // }

  const updateEstimate = (taskID) => {
    const trimmed_time = value.replace("h", "")
    // console.log("new time = ", trimmed_time)
    EDService.updateEstimate(taskID, trimmed_time);
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <TableRow >
      <TableCell>{data.name}</TableCell>
      <TableCell>{data.skill}</TableCell>
      <TableCell>{data.complexity}</TableCell>
      {hideComment ? (
        <></>
      ) : (
        <TableCell>{data.comments}</TableCell>
      )}
      <TableCell align="right" onDoubleClick={handleDoubleClick}>
        {editMode ? (
          <TextField value={value}
                     autoFocus
                     onBlur={() => handleBlur(data.id)}
                     // onKeyDown={() => handleKeyDown(data.id)}
                     onChange={handleChange} />
        ) : (
          <div onDoubleClick={handleDoubleClick}>{value}</div>
        )}
      </TableCell>
    </TableRow>
  );
};


export default EstimatorTaskTableRow;