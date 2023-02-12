import LandingPage from "./components/LandingPage";
import EstimatorDashboard from "./components/EstimatorDashboard"
import SalespersonDashboard from "./components/SalespersonDashboard"
import Login from "./components/Login/Login"
import EstimateForm from "./components/EstimateForm"
import PendingTasks from "./components/PendingTasks";
import RequirementsDocument from "./components/RequirementsDocument"
import EmailXLSX from "./components/EmailXLSX";
import NestedLines from "./components/NestedLines";

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
  {
    type: "route",
    name: "Pending Tasks",
    key: "pending-tasks",
    route: "/pending-tasks",
    component: <PendingTasks/>
  },
  {
    type: "route",
    name: "Nested Lines",
    key: "nested-lines",
    route: "/nested-lines",
    component: <NestedLines/>
  },
];

export default routes;
