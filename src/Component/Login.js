import React, { useContext } from "react";
import { GoogleLogin } from "react-google-login";
import { GraphQLClient } from "graphql-request";

import Context from "../context";
import { BASE_URL } from "../client";

const ME_QUERY = `
{
  me {
    _id
    name
    email
    picture
  }
}
`;

const Login = () => {
  const { dispatch } = useContext(Context);

  const onSuccess = async googleUser => {
    const idToken = googleUser.getAuthResponse().id_token;
    const client = new GraphQLClient(BASE_URL, {
      headers: { authorization: idToken }
    });
    const data = await client.request(ME_QUERY);
    dispatch({ type: "LOGIN_USER", payload: data.me });
    dispatch({
      type: "IS_LOGGED_IN",
      payload: googleUser.isSignedIn()
    });
  };

  const onFailure = err => {
    console.error("Error logging in", err);
    dispatch({ type: "IS_LOGGED_IN", payload: false });
  };

  return (
    <GoogleLogin
      clientId="766269806662-4gfqgidctg4vgrm4nki36g8kt9feo8t1.apps.googleusercontent.com"
      render={({ onClick }) => (
        <button className="login-button" onClick={onClick}>
          LOGIN
        </button>
      )}
      onSuccess={onSuccess}
      onFailure={onFailure}
      isSignedIn={true}
    />
  );
};

export default Login;
