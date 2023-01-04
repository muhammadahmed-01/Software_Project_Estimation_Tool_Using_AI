import http from "../http-common";

class EstimationDataService {
  getEstimation(data) {
    return http.post("/estimation", data);
  }
}

export default new EstimationDataService();