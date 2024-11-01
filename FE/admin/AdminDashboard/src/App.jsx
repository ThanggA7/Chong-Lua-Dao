import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import SideBar from "./components/Layout/SideBar/Sidebar";
import RoutePublic from "./Routers";
function App() {
  return (
    <>
      <Header />

      <div className="flex">
        <SideBar />
        <Routes>
          {RoutePublic.map((router, index) => {
            const Page = router.component;
            return <Route key={index} path={router.path} element={<Page />} />;
          })}
        </Routes>
      </div>
    </>
  );
}

export default App;
