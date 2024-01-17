import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemProvider";

export default function Navbar() {
  const { theme, ToggleTheme } = useContext(ThemeContext);
  const toggleMode = () => {
    ToggleTheme();
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <div className="mode-switch">
          <label>
            <input
              type="checkbox"
              onChange={toggleMode}
              checked={theme === "dark"}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </nav>
  );
}
