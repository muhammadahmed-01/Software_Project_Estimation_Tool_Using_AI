import http from "../http-common";

class EstimatorDataService {
  getEstimation(data) {
    return http.post("/estimator/estimation", data);
  }

  setEstimation(data) {
    return http.post("/estimator/set-estimation", data);
  }

  getPendingEstimates(estimator, project) {
    return http.get("/estimator/get-pending", {
      params: {
        assignee_id: estimator,
        project_id: project
      }
    });
  }

  getApprovedEstimates(estimator, project) {
    return http.get("/estimator/get-approved", {
      params: {
        assignee_id: estimator,
        project_id: project
      }
    });
  }

  getRejectedEstimates(estimator, project) {
    return http.get("/estimator/get-rejected", {
      params: {
        assignee_id: estimator,
        project_id: project
      }
    });
  }

  updateEstimate(taskID, time) {
    return http.patch("/estimator/update-estimate", {
      task_id: taskID,
      new_time: time
    })
  }

}

export default new EstimatorDataService();