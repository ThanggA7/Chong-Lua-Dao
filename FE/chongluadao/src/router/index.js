import NOTFOUND from "../Pages/404/404";
import DataScam from "../Pages/DataScam/DataScam";
import Download from "../Pages/Download/download";
import Home from "../Pages/Home/Home";
import Report from "../Pages/Report/report";

const PublicRouter = [
  { path: "/", component: Home },
  { path: "/download-extension", component: Download },
  { path: "/data", component: DataScam },
  { path: "/report", component: Report },
  { path: "*", component: NOTFOUND },
];

export default PublicRouter;
