import OverView from "../Pages/OverView/OverView";
import ReportValue from "../Pages/RePortValue/ReportValue";
import DeleteValue from "../Pages/DeleteValue/DeleteValue";

const RoutePublic = [
  { path: "/overview", component: OverView },
  { path: "/value", component: ReportValue },
  { path: "/delete", component: DeleteValue },
];

export default RoutePublic;
