/** @jsxImportSource @emotion/react */
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EDService from "../service/estimation.service";
import { useState } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";

export default function SubTask({ index }) {
  const [skill, setSkill] = useState(0);
  const [complexity, setComplexity] = useState(0);
  const [subtask_name, setSubTaskName] = useState("");
  const [estimate_time, setEstimateTime] = useState("");
  const [color, setColor] = useState("initial");

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
      left: 50px;
      top: ${370 + (index * 100) + "px"};
      width: 130px;
      height: 2px;
      background-color: black;
    }
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

  return (
    <Grid container spacing={1} onMouseEnter={highlightIt}
          onMouseLeave={unHighlightIt} sx={{backgroundColor: color,
          marginBottom: "3vh"
      }}>
      {
        index > 0 ? (
            <div css={myClass} />
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
        >
          Create another subtask
        </Button>
      </Grid>
    </Grid>
  );
}

SubTask.propTypes = {
  mouseEnter: PropTypes.func,
  mouseLeave: PropTypes.func,
  color: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  index: PropTypes.number
};