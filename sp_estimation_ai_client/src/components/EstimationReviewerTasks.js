import * as React from "react";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import TasksTable from "./TasksTable/EstimatorReviewerTaskTable";
import RDService from "../service/reviewer.service"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import EDService from "../service/estimator.service";

const data = [
  { id: 1, column1: "Task 1", column2: "2", column3: "3", column4: "abc", column5: "none", column6: "4h" },
  { id: 2, column1: "Task 2", column2: "2", column3: "4", column4: "abc", column5: "pending", column6: "4h" },
  { id: 3, column1: "Task 3", column2: "1", column3: "3", column4: "abc", column5: "approved", column6: "4h" },
  { id: 4, column1: "Task 4", column2: "4", column3: "2", column4: "abc", column5: "rejected", column6: "4h" }
];

export default function EstimationReviewerTasks({ status, estimator, project }) {
  const [rows, setRows] = useState([]);
  const location = useLocation();

  useEffect(() => {
    (async() => {
      setRows([])
      // API Call
      let newData = null;
      if (status === "rejected") {
        newData = RDService.getRejectedTasks(estimator, project);
      } else if (status === "pending") {
        newData = RDService.getPendingTasks(estimator, project);
      } else if (status === "approved") {
        newData = RDService.getApprovedTasks(estimator, project);
      } else if (status === "unassigned") {
        newData = RDService.getUnassignedTasks(project);
      }
      else {
        newData = RDService.getAssignedTasks(project);
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
              assignee: task.assignee_username,
              status: task.status,
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

  return (
    <React.Fragment>
      <Typography variant={"h4"} sx={{ marginLeft: "1%", marginBottom: "1%",
        textTransform: "capitalize" }}>
        {status} Tasks
      </Typography>
      <TasksTable data={rows} />
    </React.Fragment>
  );
}

EstimationReviewerTasks.propTypes = {
  status: PropTypes.string.isRequired,
  estimator: PropTypes.number.isRequired,
  project: PropTypes.number.isRequired
};