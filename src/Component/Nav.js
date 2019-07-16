import React from "react";
import PropTypes from "prop-types";

export default function Nav({ navClass }) {
  return (
    <nav className={navClass}>
      <span>MY SETTLE DOWN</span>
      <ul>
        <li className="nav-hide">
          <a>LOGIN</a>
        </li>
        <li className="nav-hide">
          <a href="https://zachzwy.github.io/delivery-react/#secondPage">
            EXPLORE
          </a>
        </li>
        <li>
          <a href="https://zachzwy.github.io/delivery-react/">ABOUT</a>
        </li>
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  navClass: PropTypes.string.isRequired
};
