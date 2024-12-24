import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { ThemeContext } from "../../../Context/ThemesContext";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

import assets from "../../../assets";
function Header() {
  const { themes } = useContext(ThemeContext);
  const [menu, setMenu] = useState(false);
  const menuVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "-100%" },
  };

  return (
    <div
      className={
        themes === "dark" ? "bg-[#1c1c1c] text-white" : "bg-white text-black"
      }
    >
      <header className="container flex items-center justify-between py-2 px-2 ">
        <Link to="/" className="flex items-center">
          <img
            className="w-[50px]"
            src={themes === "dark" ? assets.logo_dark : assets.logo}
            alt=""
          />
          <span className="font-bold"> CHỐNG LỪA ĐẢO</span>
        </Link>

        <nav className="font-OpenSans hidden xl:block">
          <ul className="flex gap-[25px] ">
            <li className="hover:text-[green]">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-[green]" : "")}
              >
                Home
              </NavLink>
            </li>
            <li className="hover:text-[green]">
              <NavLink
                to="/download-extension"
                className={({ isActive }) => (isActive ? "text-[green]" : "")}
              >
                Tải về tiện ích
              </NavLink>
            </li>
            <li className="hover:text-[green]">
              <NavLink
                to="/report"
                className={({ isActive }) => (isActive ? "text-[green]" : "")}
              >
                Báo cáo lừa đảo
              </NavLink>
            </li>
            <li className="hover:text-[green]">
              <NavLink
                to="/data"
                className={({ isActive }) => (isActive ? "text-[green]" : "")}
              >
                Dữ liệu Chống Lừa Đảo
              </NavLink>
            </li>
            <li className="hover:text-[green]">
              <NavLink
                to="/news   "
                className={({ isActive }) => (isActive ? "text-[green]" : "")}
              >
                Tin Tức
              </NavLink>
            </li>
            <li className="hover:text-[green]">
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "text-[green]" : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <button
          onClick={() => {
            setMenu(!menu);
          }}
          className="xl:hidden"
        >
          <FontAwesomeIcon className="text-[25px]" icon={faBars} />
        </button>
      </header>

      <AnimatePresence>
        {menu && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black p-5 z-50 flex flex-col"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center">
                <span className="font-bold text-white"> CHỐNG LỪA ĐẢO</span>
              </Link>
              <button
                onClick={() => {
                  setMenu(!menu);
                }}
              >
                <FontAwesomeIcon
                  className="text-[20px] text-white"
                  icon={faXmark}
                />
              </button>
            </div>
            <nav className="mt-5">
              <ul className="flex flex-col space-y-4">
                {[
                  "/",
                  "/download-extension",
                  "/report",
                  "/data",
                  "/contact",
                ].map((path, index) => (
                  <li key={index} className="hover:text-[green]">
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        isActive ? "text-[green] text-lg" : "text-white text-lg"
                      }
                    >
                      {path === "/"
                        ? "Home"
                        : path
                            .replace("/", "")
                            .replace("-", " ")
                            .replace(/^\w/, (c) => c.toUpperCase())}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
