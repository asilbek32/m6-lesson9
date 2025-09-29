import React from "react";
import { Link } from "react-router-dom";
function Header() {
  const data = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex items-center justify-between px-[40px] h-[60px] bg-red-500 text-white">
      <div>
        <Link to={"/"}>LOGO</Link>
      </div>

      <div className=" flex gap-4">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>

      <div>
        {data ? <Link to={"/user"}>{data.name}</Link> :<Link to={"/login"}>login</Link>}
      </div>
    </div>
    
  );
}

export default Header;
