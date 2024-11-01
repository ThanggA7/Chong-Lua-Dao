import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../../Context/ThemesContext";
import assets from "../../../assets";
function Footer() {
  const { themes } = useContext(ThemeContext);
  return (
    <div
      className={
        themes === "dark" ? "bg-[#1c1c1c] text-white" : "bg-white text-black"
      }
    >
      <footer className="container mt-[100px] flex items-center md:justify-between justify-center p-2">
        <Link to="/" className="flex items-center ">
          <img
            className="w-[50px]"
            src={themes === "dark" ? assets.logo_dark : assets.logo}
            alt=""
          />
          <span className="font-bold"> CHỐNG LỪA ĐẢO</span>
        </Link>
        <p className="text-[14px] text-[#606060] md:block hidden">
          © 2024 Software by Nhu Thang., All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

export default Footer;
