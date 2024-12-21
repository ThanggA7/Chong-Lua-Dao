import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import SideBar from "./components/Layout/SideBar/Sidebar";
import RoutePublic from "./Routers";
import Login from "./Pages/Login/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/overview"); 
    }
  }, [isLoggedIn, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsLoggedIn(false);
  };

  return (
    <>
      {isLoggedIn && <Header onLogout={handleLogout} />}

      <div className="flex">
        {isLoggedIn && <SideBar />}

        <div className="flex-grow">
          <Routes>
            {!isLoggedIn ? (
              <Route
                path="*"
                element={<Login setIsLoggedIn={setIsLoggedIn} />}
              />
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
