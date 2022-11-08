import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
//import styles from "./LoginPage.module.scss";

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
        // {login: true, token: 'skajfalksjñfla'}
        // 'jjfñalsjkfaslkjlj'
        // setToken(successResponse.token)
        if (successResponse.success) {
          props.setToken(successResponse);
          setLogin(successResponse);
        }
      });
    setLoginError(" ");
  };
  if (login) {
    return <Navigate to="/" />;
  }
  return (
    <DefaultLayout token={props.token}>
      <h1 className={styles["login--title"]}>LoginPage</h1>
      {loginError && <h2>Credenciales Invalidas</h2>}
      <form
        className={styles["form-login"]}
        onSubmit={(event) => submitLogin(event)}
      >
        <input
          className={styles["form-login__email"]}
          name="email"
          type="email"
        />
        <input
          className={styles["form-login__password"]}
          name="password"
          type="password"
        />
        <input
          className={styles["form-login__button"]}
          type="submit"
          value="Login"
        />
      </form>
      <p className={styles["form-login__registro"]}>
        No tienes cuenta, <Link to="/register">¡regístrate!</Link>
      </p>
    </DefaultLayout>
  );
};
