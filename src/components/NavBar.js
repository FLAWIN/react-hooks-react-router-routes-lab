import { NavLink } from "react-router-dom";
import React from "react";

function NavBar() {
  return <div className="navbar">
    <NavLink to="/">Home</NavLink> <p></p>
    <NavLink to="/actors">Actors</NavLink> <p></p>
    <NavLink to="/directors">Directors</NavLink> <p></p>
    <NavLink to="/movies">Movies</NavLink> <p></p>
  </div>;
}

export default NavBar;