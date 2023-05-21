import http from "../http-common";

class ReviewerDataService {
  getAssignedTasks(project) {
    return http.get("/reviewer/get-assigned", {
      params: {
        project_id: project
      }
    });
  }

  getUnassignedTasks(project) {
    return http.get("/reviewer/get-unassigned", {
      params: {
        project_id: project
      }
    });
  }

  getPendingTasks(estimator, project) {
    return http.get("/reviewer/get-pending", {
      params: {
        assignee_id: estimator,
        project_id: project
      }
    });
  }

  getApprovedTasks(estimator, project) {
    return http.get("/reviewer/get-approved", {
      params: {
        assignee_id: estimator,
        project_id: project
      }
    });
  }

  getRejectedTasks(estimator, project) {
    return http.get("/reviewer/get-rejected", {
      params: {
        assignee_id: estimator,
        project_id: project
      }
    });
  }

  approveEstimate(taskID, comment) {
    return http.patch("/reviewer/approve-estimate", {
      task_id: taskID,
      comments: comment
    })
  }

  rejectEstimate(taskID, comment) {
    return http.patch("/reviewer/reject-estimate", {
      task_id: taskID,
      comments: comment
    })
  }

  updateEstimate(taskID, time) {
    return http.patch("/reviewer/update-estimate", {
      task_id: taskID,
      new_time: time
    })
  }

  updateAssignee(taskID, assignee) {
    return http.patch("/reviewer/update-assignee", {
      task_id: taskID,
      assignee_id: assignee
    })
  }

  getUsers(){
    return http.get("/users");
  }

  getEstimatorEstimates(estimator_username) {
    return http.get("/reviewer/get-estimator-estimates", {
      estimator_username: estimator_username
    });
  }

  getProjectEstimates(project_name){
    return http.get("/reviewer/get-project-estimates", {
      project_name: project_name
    });
  }

}

export default new ReviewerDataService();