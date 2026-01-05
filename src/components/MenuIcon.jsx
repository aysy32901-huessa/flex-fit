import React from "react";
import "./MenuIcon.css";

const MenuIcon = ({ onClick }) => {
  return (
    <div className="menu-icon" onClick={onClick}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default MenuIcon;
