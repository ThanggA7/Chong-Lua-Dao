import OverView from "../Pages/OverView/OverView";
import ReportValue from "../Pages/RePortValue/ReportValue";
import DeleteValue from "../Pages/DeleteValue/DeleteValue";
import NewsEditor from "../Pages/News/NewsEditor";
const RoutePublic = [
  { path: "/overview", component: OverView },
  { path: "/value", component: ReportValue },
  { path: "/delete", component: DeleteValue },
  { path: "/news", component: NewsEditor },
];

export default RoutePublic;
