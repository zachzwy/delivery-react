import React, { useContext } from "react";
import { GoogleLogout } from "react-google-login";

import Context from "../context";

const Logout = () => {
  const { state, dispatch } = useContext(Context);

  const onLogout = () => {
    dispatch({ type: "LOGOUT_USER" });
  };

  return (
    <GoogleLogout
      onLogoutSuccess={onLogout}
      render={({ onClick }) => (
        <button className="logout-button" onClick={onClick}>
          {`HI, ${state.currentUser.name.toUpperCase()}`}
        </button>
      )}
    />
  );
};

export default Logout;
