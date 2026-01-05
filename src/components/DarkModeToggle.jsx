import React from "react";
import "./DarkModeToggle.css";

const DarkModeToggle = ({ toggle, isDarkMode }) => {
  return (
    <button className="dark-mode-toggle" onClick={toggle}>
      {isDarkMode ? "🌞" : "🌙"}
    </button>
  );
};

export default DarkModeToggle;
