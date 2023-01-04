import routes from "routes";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

export default function App() {
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <>
      <CssBaseline/>
      <Router>
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Link to="/dashboard" />} />
        </Routes>
      </Router>
    </>
  );
}
