import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faMagnifyingGlass,
  faBell,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

function Header({ onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="flex items-center p-2 relative">
        <div className="flex items-center gap-4">
          <button onClick={toggleMenu} className="xl:hidden">
            <FontAwesomeIcon className="w-[24px] h-[24px]" icon={faBars} />
          </button>
          <p className="font-medium xl:block hidden">CHONG LUA DAO</p>
        </div>

        <div className="ml-auto flex items-center gap-[16px]">
          <button>
            <FontAwesomeIcon icon={faBell} className="w-[24px] h-[24px]" />
          </button>
          <div className="group">
            <button>
              <img
                className="w-[32px] h-[32px] object-cover rounded-full"
                src="https://picsum.photos/200"
                alt=""
              />
            </button>

            <div className=" absolute right-0 bottom-[-15px] border hidden group-hover:block">
              <button className=" font-medium  " onClick={onLogout}>
                Đăng Xuất
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="w-full h-[1px] bg-[#E5E7EB] my-[1/2em]"></div>

      {isMenuOpen && (
        <div className="flex flex-col items-start p-4 bg-gray-100 xl:hidden absolute w-full top-12">
          <div>
            <p className="mb-2 font-medium text-center">CHONG LUA DAO</p>
          </div>
          <Link to="/overview" className="mb-2 font-medium">
            Overview
          </Link>
          <Link to="/value" className="mb-2 font-medium">
            Report Value
          </Link>
          <button className="mb-2 font-medium" onClick={onLogout}>
            Đăng Xuất
          </button>
        </div>
      )}
    </>
  );
}

export default Header;
