import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie, faFile } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper, faTrash  } from "@fortawesome/free-solid-svg-icons";
function SideBar() {
  return (
    <>
      <div className="w-[249px] h-[92vh] border hidden xl:block ">
        <ul className="p-4">
          <li className="hover:text-[#0E9F6E] hover:bg-[#dededed5] rounded-lg ">
            <NavLink
              to="/overview"
              className={({ isActive }) => (isActive ? "text-[#0E9F6E]  " : "")}
            >
              <button className="p-2">
                <FontAwesomeIcon icon={faChartPie} /> OverView
              </button>
            </NavLink>
          </li>
          <li className=" mt-[10px] hover:text-[#0E9F6E] hover:bg-[#dededed5] rounded-lg">
            <NavLink
              to="/value"
              className={({ isActive }) => (isActive ? "text-[#0E9F6E] " : "")}
            >
              <button className="p-2">
                <FontAwesomeIcon icon={faFile} /> Report Value
              </button>
            </NavLink>
          </li>
          <li className=" mt-[10px] hover:text-[#0E9F6E] hover:bg-[#dededed5] rounded-lg">
            <NavLink
              to="/delete"
              className={({ isActive }) => (isActive ? "text-[#0E9F6E] " : "")}
            >
              <button className="p-2">
                <FontAwesomeIcon icon={faTrash } /> Delete Report
              </button>
            </NavLink>
          </li>{" "}
          <li className=" mt-[10px] hover:text-[#0E9F6E] hover:bg-[#dededed5] rounded-lg">
            <NavLink
              to="/news"
              className={({ isActive }) => (isActive ? "text-[#0E9F6E] " : "")}
            >
              <button className="p-2">
                <FontAwesomeIcon icon={faNewspaper} /> News
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
