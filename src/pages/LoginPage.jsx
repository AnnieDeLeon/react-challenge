import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";

export const LoginPage = (props) => {
  const [loginError, setLoginError] = useState(false);
  const [login, setLogin] = useState(false);
  const submitLogin = (e) => {
    e.preventDefault();
    setLoginError(false);
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((successResponse) => {
        props.setToken(successResponse);
        setLogin(true);
      })
      .catch((err) => {
        setLoginError(true);
      });
  };
  if (login) {
    return <Navigate to="/" />;
  }
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
