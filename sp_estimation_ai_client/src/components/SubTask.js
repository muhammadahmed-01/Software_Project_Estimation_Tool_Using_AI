/** @jsxImportSource @emotion/react */
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EDService from "../service/estimator.service";
import { useState } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import { v4 as uuidv4 } from "uuid"; // import uuidv4
import "./nesting.css";

export default function SubTask({ index, task_name, onCreateAnotherSubtaskClick, subtasks, depth = 0 }) {
  const [skill, setSkill] = useState(0);
  const [complexity, setComplexity] = useState(0);
  const [subtask_name, setSubTaskName] = useState("");
  const [estimate_time, setEstimateTime] = useState("");
  const [color, setColor] = useState("initial");
  const [subtaskList, setSubtaskList] = useState(subtasks);

  const highlightIt = (e) => {
    setColor("#D9CEFF");
  };

  const unHighlightIt = (e) => {
    setColor("initial");
  };

  const myClass = css`
    &:before {
      content: '';
      position: absolute;
      left: ${50 * depth + "px"};
      top: ${370 + (depth * 100) + "px"};
      width: 130px;
      height: 2px;
      background-color: black;
    }
  `;

  const myClass2 = css`
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: ${-12 + (depth * 2) + "vw"};
      height: 100%;
      border-left: 2px solid purple;
    }

  ,
  &: after {
    content: "";
    width: ${11 - (depth * 2) + "vw"};
    height: 1px;
    position: absolute;
    top: 7vh;
    left: ${-12 + (depth * 2) + "vw"};
    margin-top: -1px;
    border-top: 1px solid #000;
  },
  `;

  function onChangeSkill(e) {
    setSkill(e.target.value);
  }

  function onChangeComplexity(e) {
    setComplexity(e.target.value);
  }

  function onChangeSubTaskName(e) {
    setSubTaskName(e.target.value);
  }

  function onChangeEstimateTime(e) {
    setEstimateTime(e.target.value);
    let data = {
      skill: skill,
      complexity: complexity,
      task_name: task_name,
      subtask_name: subtask_name,
      estimate_time: estimate_time
    };
    EDService.setEstimation(data)
      .then(response => {
        console.log("response = " + JSON.stringify(response.data));
      }).catch(e => {
      console.log(e);
    });
  }

  function getEstimations() {
    let data = {
      skill: skill,
      complexity: complexity,
      task_name: task_name,
      subtask_name: subtask_name
    };
    EDService.getEstimation(data)
      .then(response => {
        console.log("response = " + JSON.stringify(response.data));
        setEstimateTime(response.data);
      }).catch(e => {
      console.log(e);
    });
  }

  const handleAddSubtask = () => {
    const newSubtasks = onCreateAnotherSubtaskClick(index, subtaskList);
    setSubtaskList(newSubtasks);
  };

  return (
    <Grid container spacing={1}
          onMouseEnter={highlightIt}
          onMouseLeave={unHighlightIt}
          sx={{
            backgroundColor: color,
            marginTop: "1vh",
            paddingBottom: "3vh",
            paddingTop: "2vh",
            marginLeft: 0
          }}
          css={myClass2}
          className={"subtask"}
    >
      {/*{*/}
      {/*  index > 0 ? (*/}
      {/*      <div css={myClass} />*/}
      {/*    ) :*/}
      {/*    (*/}
      {/*      <></>*/}
      {/*    )*/}
      {/*}*/}
      <div className="circle"></div>
      <Grid item xs={2.5}>
        <TextField
          required
          id="task_name"
          label="Subtask name"
          name="task_name"
          value={subtask_name}
          autoComplete="task_name"
          onChange={onChangeSubTaskName}
        />
      </Grid>
      <Grid item xs={2.5}>
        <TextField
          autoComplete="skillLevel"
          required
          id="skillLevel"
          label="Skill"
          name="skillLevel"
          value={skill}
          onChange={onChangeSkill}
        />
      </Grid>
      <Grid item xs={2.5}>
        <TextField
          required
          id="complexityLevel"
          label="Complexity"
          name="complexityLevel"
          autoComplete="complexityLevel"
          value={complexity}
          onChange={onChangeComplexity}
        />
      </Grid>
      <Grid item xs={2.5}>
        <TextField
          required
          id="estimate"
          label="Estimate"
          name="estimate"
          autoComplete="estimate"
          value={estimate_time}
          onChange={onChangeEstimateTime}
        />
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained"
                sx={{
                  mt: 1, textTransform: "capitalize",
                  background: "#0048D9", borderRadius: "6px",
                  fontFamily: "IBM Plex Sans, sans-serif",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "1em"
                }}
                onClick={getEstimations}
        >
          Generate Estimate
        </Button>
      </Grid>
      <Grid item xs={1.9}>
        <Button variant="contained"
                sx={{
                  textTransform: "capitalize",
                  pt: "0.7vh",
                  pb: "0.7vh",
                  pl: "1vw",
                  pr: "1vw",
                  background: "#0048D9", borderRadius: "5.4375px",
                  fontFamily: "IBM Plex Sans, sans-serif",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "0.8em"
                }}
                onClick={handleAddSubtask}
                disabled={depth > 3}
        >
          Create another subtask
        </Button>
      </Grid>
      {subtaskList.map((subtask, index) => (
        <SubTask
          key={index}
          index={index + 1}
          task_name={subtask.subtask_name}
          onCreateAnotherSubtaskClick={onCreateAnotherSubtaskClick}
          subtasks={subtask.subtasks}
          depth={depth + 1}
          className={"subtask"}
        />
      ))}
    </Grid>
  );
}

SubTask.propTypes = {
  mouseEnter: PropTypes.func,
  mouseLeave: PropTypes.func,
  color: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  index: PropTypes.number,
  task_name: PropTypes.string.isRequired,
  onCreateAnotherSubtaskClick: PropTypes.func.isRequired,
  subtasks: PropTypes.array.isRequired,
  depth: PropTypes.number
};