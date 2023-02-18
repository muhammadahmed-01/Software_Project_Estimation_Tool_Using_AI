import * as React from "react";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import TasksTable from "./TasksTable"

const data = [
  { id: 1, column1: "Task 1", column2: "2", column3: "3", column4: "Good", column5: "4h" },
  { id: 2, column1: "Task 2", column2: "2", column3: "4", column4: "Bad", column5: "4h" },
  { id: 3, column1: "Task 3", column2: "1", column3: "3", column4: "Good", column5: "4h" },
  { id: 4, column1: "Task 4", column2: "4", column3: "2", column4: "Better", column5: "4h" },
];


export default function ReviewedTasks({ status }) {
  return (
    <React.Fragment>
      <Typography variant={"h4"} sx={{ marginLeft: "1%", marginBottom: "1%" }}>
        {status} Tasks
      </Typography>
      <TasksTable data={data} />
    </React.Fragment>
  );
}

ReviewedTasks.propTypes = {
  status: PropTypes.string.isRequired,
};