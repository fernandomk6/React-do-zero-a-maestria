import "./Navbar.css";

import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/contacts">Contatos</NavLink> </li>
          <li><NavLink to="/about">Sobre</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;