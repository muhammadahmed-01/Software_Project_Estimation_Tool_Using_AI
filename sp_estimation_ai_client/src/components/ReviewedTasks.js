/* eslint react/prop-types: 0 */
import * as React from "react";
import { Typography, TableHead, TableCell } from "@mui/material";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const data = [
  { id: 1, column1: "Task 1", column2: "2", column3: "3", column4: "Good", column5: "4h" },
  { id: 2, column1: "Task 2", column2: "2", column3: "4", column4: "Bad", column5: "4h" },
  { id: 3, column1: "Task 3", column2: "1", column3: "3", column4: "Good", column5: "4h" },
  { id: 4, column1: "Task 4", column2: "4", column3: "2", column4: "Better", column5: "4h" },
];

const Table = ({ data }) => {

console.log(data);
  return (
    <table>
      <TableHead>
        <tr>
          <TableCell>Task Name</TableCell>
          <TableCell>Skill</TableCell>
          <TableCell>Complexity</TableCell>
          <TableCell>Comments</TableCell>
          <TableCell align="right">Estimated Time</TableCell>
        </tr>
      </TableHead>
      <tbody>
        {data.map((rowData) => (
          <TableRow key={rowData.id} data={rowData} />
        ))}
      </tbody>
    </table>
  );
};

const TableRow = ({ data }) => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(data.column3);

  const handleDoubleClick = () => {
    setEditMode(true);
  };

  const handleBlur = () => {
    setEditMode(false);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  console.log("Data row value");
  console.log(data);
  return (
    <tr>
      <td>{data.column1}</td>
      <td>{data.column2}</td>
      <td>{data.column3}</td>
      <td>{data.column4}</td>
      <td onDoubleClick={handleDoubleClick}>
        {editMode ? (
          <input type="text" value={value} onBlur={handleBlur} onChange={handleChange} />
        ) : (
          value
        )}
      </td>
    </tr>
  );
};

export default function ReviewedTasks({ status }) {
  // const [isEditing, setIsEditing] = useState(false);
  // const [cellValue, setCellValue] = useState("4h");

  // const handleDoubleClick = () => {
  //   setIsEditing(true);
  // };

  // const handleBlur = () => {
  //   setIsEditing(false);
  //   // onCellUpdate(cellValue);
  // };

  // const handleChange = event => {
  //   setCellValue(event.target.value);
  // };

  // console.log("Your passed status: ", status)
  return (
    <React.Fragment>
      <Typography variant={"h4"} sx={{ marginLeft: "1%", marginBottom: "1%" }}>
        {status} Tasks
      </Typography>
      <Table data={data} />
      {/* <Table size="small">
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
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">
              {isEditing ? (
                <TextField value={cellValue} onBlur={handleBlur} onChange={handleChange} />
              ) : (
                <div onDoubleClick={handleDoubleClick}>{cellValue}</div>
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">
              {isEditing ? (
                <TextField value={cellValue} onBlur={handleBlur} onChange={handleChange} />
              ) : (
                <div onDoubleClick={handleDoubleClick}>{cellValue}</div>
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">
              {isEditing ? (
                <TextField value={cellValue} onBlur={handleBlur} onChange={handleChange} />
              ) : (
                <div onDoubleClick={handleDoubleClick}>{cellValue}</div>
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">
              {isEditing ? (
                <TextField value={cellValue} onBlur={handleBlur} onChange={handleChange} />
              ) : (
                <div onDoubleClick={handleDoubleClick}>{cellValue}</div>
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">
              {isEditing ? (
                <TextField value={cellValue} onBlur={handleBlur} onChange={handleChange} />
              ) : (
                <div onDoubleClick={handleDoubleClick}>{cellValue}</div>
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">
              {isEditing ? (
                <TextField value={cellValue} onBlur={handleBlur} onChange={handleChange} />
              ) : (
                <div onDoubleClick={handleDoubleClick}>{cellValue}</div>
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">
              {isEditing ? (
                <TextField value={cellValue} onBlur={handleBlur} onChange={handleChange} />
              ) : (
                <div onDoubleClick={handleDoubleClick}>{cellValue}</div>
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell>good</TableCell>
            <TableCell align="right">
              {isEditing ? (
                <TextField value={cellValue} onBlur={handleBlur} onChange={handleChange} />
              ) : (
                <div onDoubleClick={handleDoubleClick}>{cellValue}</div>
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">
              {isEditing ? (
                <TextField value={cellValue} onBlur={handleBlur} onChange={handleChange} />
              ) : (
                <div onDoubleClick={handleDoubleClick}>{cellValue}</div>
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">
              {isEditing ? (
                <TextField value={cellValue} onBlur={handleBlur} onChange={handleChange} />
              ) : (
                <div onDoubleClick={handleDoubleClick}>{cellValue}</div>
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">
              {isEditing ? (
                <TextField value={cellValue} onBlur={handleBlur} onChange={handleChange} />
              ) : (
                <div onDoubleClick={handleDoubleClick}>{cellValue}</div>
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">
              {isEditing ? (
                <TextField value={cellValue} onBlur={handleBlur} onChange={handleChange} />
              ) : (
                <div onDoubleClick={handleDoubleClick}>{cellValue}</div>
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Task 1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">
              {isEditing ? (
                <TextField value={cellValue} onBlur={handleBlur} onChange={handleChange} />
              ) : (
                <div onDoubleClick={handleDoubleClick}>{cellValue}</div>
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table> */}
    </React.Fragment>
  );
}

ReviewedTasks.propTypes = {
  status: PropTypes.string.isRequired,
};

// Table.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       column1: PropTypes.string.isRequired,
//       column2: PropTypes.string.isRequired,
//       column3: PropTypes.string.isRequired,
//       column4: PropTypes.string.isRequired,
//       column5: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

// TableRow.propTypes = {
//   data: PropTypes.object,
// };
