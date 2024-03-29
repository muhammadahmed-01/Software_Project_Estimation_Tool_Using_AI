/** @jsxImportSource @emotion/react */
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EDService from "../service/estimator.service";
import { useState } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import "./nesting.css";

export default function SubTask({ index, task_name, onCreateAnotherSubtaskClick,
                                  subtasks, depth = 0, allSubtasks,
                                  setAllSubtasks }) {
  const [skill, setSkill] = useState();
  const [complexity, setComplexity] = useState();
  const [subtask_name, setSubTaskName] = useState("");
  const [estimate_time, setEstimateTime] = useState("");
  const [color, setColor] = useState("initial");
  const [subtaskList, setSubtaskList] = useState(subtasks);

  const highlightIt = (e) => {
    // console.log("Highlight called with depth = ", depth)
    e.stopPropagation();
    setColor("#D9CEFF");
  };

  const unHighlightIt = (e) => {
    e.stopPropagation();
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
      border-left: 2px solid black;
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
    setAllSubtasks([...allSubtasks, ...newSubtasks]);
  };

  return (
    <Grid container spacing={1}
          onMouseEnter={highlightIt}
          onMouseLeave={unHighlightIt}
          sx={{
            backgroundColor: color,
            marginTop: "0.1vh",
            paddingBottom: "3vh",
            paddingTop: "2vh",
            marginLeft: 0
          }}
          css={myClass2}
          className={"subtask"}
    >
      {
        index < 1 ? (
            <div className="circle" style={{
              content: "",
              width: "10px",
              height: "10px",
              position: "absolute",
              top: "-5px",
              left: `${-12 + (depth * 2) - 0.25 + "vw"}`,
              borderRadius: "50%",
              backgroundColor: "#5030E5",
            }}></div>
          ) :
          (
            <></>
          )
      }

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
      <Grid item xs={2.1}>
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
          Create subtask for this task
        </Button>
      </Grid>
      {subtaskList.map((subtask, index) => (
        <SubTask
          key={index}
          index={index}
          task_name={subtask.subtask_name}
          onCreateAnotherSubtaskClick={onCreateAnotherSubtaskClick}
          subtasks={subtask.subtasks}
          depth={depth + 1}
          className={"subtask"}
          allSubtasks={allSubtasks}
          setAllSubtasks={setAllSubtasks}
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
  allSubtasks: PropTypes.array.isRequired,
  setAllSubtasks: PropTypes.func.isRequired,
  depth: PropTypes.number
};