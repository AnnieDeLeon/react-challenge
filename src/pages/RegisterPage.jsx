import React, { useState } from "react";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Link, Navigate } from "react-router-dom";
import styles from "./RegisterPage.module.scss";
export const RegisterPage = (props) => {
  const [registerError, setRegisterError] = useState(false);
  const [register, setRegister] = useState(false);
  const submitRegister = (e) => {
    e.preventDefault();
    setRegisterError(false);
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const lastName = formData.get("lastName");
    const biography = formData.get("biography");
    const citizenship = formData.get("citizenship");
    const createdAt = new Date().toDateString();
    const email = formData.get("email");
    const password = formData.get("password");
    fetch("http://localhost:8080", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        lastName,
        biography,
        citizenship,
        createdAt,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((successResponse) => {
        if (successResponse.success) {
          setRegister(successResponse.success);
        } else {
          setRegisterError(" ");
        }
      });
  };
  if (register) {
    return <Navigate to="/login" />;
  }
  return (
    <DefaultLayout token={props.token}>
      <h1 className={styles["register--title"]}>RegisterPage</h1>
      {registerError && (
        <h2 className={styles["register--title"]}>
          Ha ocurrido un error, verifique los campos
        </h2>
      )}
      <form
        className={styles["form-register"]}
        onSubmit={(event) => submitRegister(event)}
      >
        <input
          className={styles["form-register"]}
          name="name"
          type="text"
          placeholder="Enter your name"
        />
        <input
          className={styles["form-register"]}
          name="lastName"
          type="text"
          placeholder="Enter your last name"
        />
        <input
          className={styles["form-register"]}
          name="biography"
          type="text"
          placeholder="Write a short description of yourself"
        />

        <input
          className={styles["form-register"]}
          name="citizenship"
          type="text"
          placeholder="Enter your nationality"
        />
        <input
          className={styles["form-register"]}
          name="email"
          type="email"
          placeholder="Enter your email"
        />
        <input
          className={styles["form-register"]}
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <input name="myFile" type="file" />
        <input
          className={styles["form-register__button"]}
          type="submit"
          value="Register"
        />
      </form>
      <p className={styles["form-register__login"]}>
        Ya tienes cuenta, <Link to="/login">inicia sesión</Link>
      </p>
    </DefaultLayout>
  );
};
