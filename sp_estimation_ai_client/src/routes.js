import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard"
import Login from "./components/Login/Login"
import EstimateForm from "./components/EstimateForm"
import PendingTasks from "./components/PendingTasks";

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
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    component: <Dashboard />,
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
    type: "router",
    name: "Pending Tasks",
    key: "pending-tasks",
    route: "/pending-tasks",
    component: <PendingTasks/>
  }
];

export default routes;
