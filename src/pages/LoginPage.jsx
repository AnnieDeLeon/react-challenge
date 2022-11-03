import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Footer } from "../components/Footer";

export const LoginPage = (props) => {
  const [loginError, setLoginError] = useState(false);
  const submitLogin = (e) => {
    e.preventDefault();
    setLoginError(false);
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((successResponse) => {
        // {login: true, token: 'skajfalksjñfla'}
        // 'jjfñalsjkfaslkjlj'
        // setToken(successResponse.token)
        props.setToken(successResponse);
      })
      .catch((err) => {
        setLoginError(true);
      });
  };

  return (
    <DefaultLayout token={props.token}>
      <h1>LoginPage</h1>
      {loginError && <h2>Hubo un error</h2>}
      <form onSubmit={(event) => submitLogin(event)}>
        <input name="email" type="email" />
        <input name="password" type="password" />
        <input type="submit" value="Login" />
      </form>
      <p>
        No tienes cuenta, <Link to="/register">¡regístrate!</Link>
      </p>
    </DefaultLayout>
  );
};
