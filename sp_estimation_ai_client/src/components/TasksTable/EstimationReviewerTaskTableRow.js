/* eslint react/prop-types: 0 */
import * as React from "react";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import {
  TableRow,
  TableCell,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Modal, Select
} from "@mui/material";
import RDService from "../../service/reviewer.service";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const EstimatorTaskTableRow = ({ data }) => {
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState(false);
  const [value, setValue] = useState(data.time);
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [showAssignToModal, setShowAssignToModal] = useState(false);
  const [comments, setComments] = useState("");
  const [selectedUser, setSelectedUser] = useState("none");
  const [usernames, setUsernames] = useState([]);

  useEffect(() => {
    getUsers();
    // console.log("usernames = ", usernames);
  }, []);

  const getUsers = () => {
    RDService.getUsers()
      .then(response => {
        const users = response.data.users;
        const data = users.map(user => {
          return {
            id: user.user_id,
            name: user.username
          };
        });
        // console.log("users = ", data);
        // Do something with the data
        setUsernames(data);
      })
      .catch(
        error => console.log(error)
      );
  };

  const handleApproveClick = (task) => {
    setShowApproveModal(true);
  };

  const handleApproveConfirm = (task) => {
    setShowApproveModal(false);
    RDService.approveEstimate(task, comments);
  };

  const handleApproveCancel = () => {
    setShowApproveModal(false);
  };

  const handleRejectClick = (task) => {
    setShowRejectModal(true);
  };

  const handleRejectConfirm = (task) => {
    if (comments.trim() === "") {
      setError(true);
    } else {
      setError(false);
      setShowRejectModal(false);
      RDService.rejectEstimate(task, comments);
    }
  };

  const handleRejectCancel = () => {
    setShowRejectModal(false);
  };


  const handleDoubleClick = () => {
    setEditMode(true);
  };

  const handleBlur = () => {
    setEditMode(false);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // add function to handle opening the modal when the "assign to" button is clicked
  const handleAssignToClick = () => {
    setShowAssignToModal(true);
  };

  // add function to handle closing the modal when the user clicks "confirm"
  const handleAssignToConfirm = () => {
    // make API call to update task with selectedUser's id
    setShowAssignToModal(false);
    // console.log("selected user = ", selectedUser);
    if (selectedUser !== "") {
      const user = usernames.find((item) => item.name === selectedUser);
      RDService.updateAssignee(data.id, user.id)
        .then(r => console.log("Successfully assigned"));
    }
  };

  const handleAssignToCancel = () => {
    // make API call to update task with selectedUser's id
    setShowAssignToModal(false);
  };

  // add function to handle selecting a user from the dropdown
  const handleUserSelect = (event) => {
    setSelectedUser(event.target.value);
  };

  return (
    <>
      <TableRow>
        <TableCell>{data.name}</TableCell>
        <TableCell>{data.skill}</TableCell>
        <TableCell>{data.complexity}</TableCell>
        <TableCell>{data.assignee}</TableCell>
        <TableCell>{data.status}</TableCell>
        <TableCell align="right" onDoubleClick={handleDoubleClick}>
          {editMode ? (
            <TextField value={value} autoFocus onBlur={handleBlur} onChange={handleChange} />
          ) : (
            <div onDoubleClick={handleDoubleClick}>{value}</div>
          )}
        </TableCell>
        {
          data.assignee === null ? (
              <TableCell align={"right"}>
                <Button variant={"contained"} onClick={handleAssignToClick}>Assign to</Button>
              </TableCell>
            ) :
            (
              <TableCell align={"right"}>
                <IconButton disabled={data.status === "approved"}
                            onClick={() => handleApproveClick(data)}>
                  <CheckIcon />
                </IconButton>
                <IconButton disabled={data.status === "rejected"}
                            onClick={() => handleRejectClick(data)}>
                  <ClearIcon />
                </IconButton>
                <Button variant={"contained"} onClick={handleAssignToClick}>Assign to</Button>
              </TableCell>
            )
        }
      </TableRow>
      <Dialog open={showApproveModal} onClose={handleApproveCancel}>
        <DialogTitle>Confirm Approval</DialogTitle>
        <DialogContent>
          <Typography gutterBottom>The estimate has been approved</Typography>
          <TextField label="Comments (Optional)"
                     fullWidth
                     value={comments}
                     variant="outlined"
                     multiline
                     rows={4}
                     onChange={(e) => setComments(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleApproveCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleApproveConfirm(data.id)} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={showRejectModal} onClose={handleRejectCancel}>
        <DialogTitle>Reject Approval</DialogTitle>
        <DialogContent>
          <Typography gutterBottom>Please provide comments to reject the estimate</Typography>
          {error && <Typography color="error">Comments are required to confirm</Typography>}
          <TextField label="Comments (Required)"
                     fullWidth
                     variant="outlined"
                     multiline
                     rows={4}
                     value={comments}
                     onChange={(e) => setComments(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRejectCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleRejectConfirm(data.id)} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={showAssignToModal} onClose={() => handleAssignToCancel(false)}>
        <div>
          <h2>Assign task to:</h2>
          <Select value={selectedUser} onChange={handleUserSelect}>
            {usernames.map((user) => (
              <MenuItem key={user.id} value={user.name}>{user.name}</MenuItem>
            ))}
          </Select>
          <Button onClick={handleAssignToConfirm}>Confirm</Button>
          <Button onClick={() => setShowAssignToModal(false)}>Cancel</Button>
        </div>
      </Dialog>
    </>
  );
};


export default EstimatorTaskTableRow;