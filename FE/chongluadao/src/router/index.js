import NOTFOUND from "../Pages/404/404";
import Contacts from "../Pages/Contacts/Contact";
import DataScam from "../Pages/DataScam/DataScam";
import Download from "../Pages/Download/download";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";
import NewsDetail from "../Pages/News/NewsDetail";
import Report from "../Pages/Report/report";

const PublicRouter = [
  { path: "/", component: Home },
  { path: "/download-extension", component: Download },
  { path: "/data", component: DataScam },
  { path: "/report", component: Report },
  { path: "/contact", component: Contacts },
  { path: "/news", component: News },
  { path: "/news/:id", component: NewsDetail },
  { path: "*", component: NOTFOUND },
];

export default PublicRouter;
