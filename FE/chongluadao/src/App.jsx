import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeContext } from "./Context/ThemesContext";
import Header from "./components/Layout/Header/header";
import Footer from "./components/Layout/Footer/footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faMoon } from "@fortawesome/free-solid-svg-icons";
import PublicRouter from "./router";

function App() {
  const context = useContext(ThemeContext);

  return (
    <div className={context.themes === "dark" ? "bg-[#262726]" : ""}>
      <Header />
      <Routes>
        {PublicRouter.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
      </Routes>
      <button
        onClick={context.toggleMenu}
        className="text-[20px] fixed right-5 bottom-5 px-3 py-[5px] rounded-full bg-[white] dark:bg-white"
      >
        {context.themes == "dark" ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faLightbulb} />
        )}
      </button>
      <Footer />
    </div>
  );
}

export default App;
