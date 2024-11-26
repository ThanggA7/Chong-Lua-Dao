import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import SideBar from "./components/Layout/SideBar/Sidebar";
import RoutePublic from "./Routers";
import Login from "./Pages/Login/Login";

function App() {
  const isLoggedIn = true;

  return (
    <>
      {isLoggedIn && <Header />}

      <div className="flex">
        {isLoggedIn && <SideBar />}

        <div className="flex-grow">
          <Routes>
            {!isLoggedIn ? (
              <Route path="*" element={<Login />} />
            ) : (
              RoutePublic.map((router, index) => {
                const Page = router.component;
                return (
                  <Route key={index} path={router.path} element={<Page />} />
                );
              })
            )}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
