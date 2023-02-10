import http from "../http-common";

class EstimationDataService {
  getEstimation(data) {
    return http.post("/estimation", data);
  }
  setEstimation(data) {
    return http.post("/set-estimation", data);
  }
}

export default new EstimationDataService();