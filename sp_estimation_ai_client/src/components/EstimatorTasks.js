import * as React from "react";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import TasksTable from "./TasksTable/EstimatorTaskTable";
import EDService from "../service/estimator.service";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

let originalData = [
  { id: 1, column1: "Task 1", column2: "2", column3: "3", column4: "Good", column5: "4h" },
  { id: 2, column1: "Task 2", column2: "2", column3: "4", column4: "Bad", column5: "4h" },
  { id: 3, column1: "Task 3", column2: "1", column3: "3", column4: "Good", column5: "4h" },
  { id: 4, column1: "Task 4", column2: "4", column3: "2", column4: "Better", column5: "4h" }
];

// let originalData = null;


export default function EstimatorTasks({ status, hideComment, estimator, project }) {
  const [rows, setRows] = useState([]);
  const location = useLocation();

  useEffect(() => {
    (async() => {
      setRows([])
      // API Call
      let newData = null;
      if (status === "rejected") {
        newData = EDService.getRejectedEstimates(estimator, project);
      } else if (status === "pending") {
        newData = EDService.getPendingEstimates(estimator, project);
      } else {
        newData = EDService.getApprovedEstimates(estimator, project);
      }
      // console.log(typeof newData);
      newData
        .then(response => {
          const tasks = response.data.tasks;
          const data = tasks.map(task => {
            return {
              id: task.task_id,
              name: task.name,
              skill: task.skill,
              complexity: task.complexity,
              comments: task.comments,
              time: `${task.estimated_time}h`
            };
          });
          // console.log(data);
          // Do something with the data
          setRows(data);
        })
        .catch(error => {
          console.log(error);
        });
    })()
  }, [location.search])

  // console.log("original data = ", rows)

  return (
    <React.Fragment>
      <Typography variant={"h4"} sx={{
        marginLeft: "1%", marginBottom: "1%",
        textTransform: "capitalize"
      }}>
        {status} Tasks
      </Typography>
      <TasksTable data={rows} hideComment={hideComment} />
    </React.Fragment>
  );
}

EstimatorTasks.propTypes = {
  status: PropTypes.string.isRequired,
  hideComment: PropTypes.bool.isRequired,
  estimator: PropTypes.number.isRequired,
  project: PropTypes.number.isRequired
};