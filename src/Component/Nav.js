import React, { useContext } from "react";
import PropTypes from "prop-types";

import Login from "./Login";
import Logout from "./Logout";
import Context from "../context";

const Nav = ({ navClass }) => {
  const { state } = useContext(Context);

  return (
    <nav className={navClass}>
      <span>MY SETTLE DOWN</span>
      <ul>
        <li>{state.currentUser ? <Logout /> : <Login />}</li>
        <li className="nav-hide">
          <a href="https://zachzwy.github.io/delivery-react/#secondPage">
            EXPLORE
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

Nav.propTypes = {
  navClass: PropTypes.string.isRequired
};
