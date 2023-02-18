import LandingPage from "./components/LandingPage";
import EstimatorDashboard from "./components/EstimatorDashboard"
import EstimationReviewerDashboard from "./components/EstimationReviewerDashboard"
import SalespersonDashboard from "./components/SalespersonDashboard"
import Login from "./components/Login/Login"
import EstimateForm from "./components/EstimateForm"
import RequirementsDocument from "./components/RequirementsDocument"
import EmailXLSX from "./components/EmailXLSX";

const routes = [
  {
    type: "route",
    name: "Home",
    key: "home",
    route: "/",
    component: <LandingPage />
  },
  {
    type: "route",
    name: "Estimator Dashboard",
    key: "estimator dashboard",
    route: "/estimator-dashboard",
    component: <EstimatorDashboard />,
  },
  {
    type: "route",
    name: "Estimation Reviewer Dashboard",
    key: "estimator reviewer dashboard",
    route: "/estimation-reviewer-dashboard",
    component: <EstimationReviewerDashboard />,
  },
  {
    type: "route",
    name: "Salesperson Dashboard",
    key: "salesperson dashboard",
    route: "/salesperson-dashboard",
    component: <SalespersonDashboard />,
  },
  {
    type: "route",
    name: "Requirements Document",
    key: "requirements document",
    route: "/requirements-document",
    component: <RequirementsDocument />,
  },
  {
    type: "route",
    name: "Email XLSX File",
    key: "email xlsx",
    route: "/email-xlsx",
    component: <EmailXLSX />,
  },
  {
    type: "route",
    name: "Sign In",
    key: "sign-in",
    route: "/login",
    component: <Login />,
  },
  {
    type: "route",
    name: "Estimation Form",
    key: "estimation-form",
    route: "/new-estimate",
    component: <EstimateForm />,
  },
];

export default routes;
