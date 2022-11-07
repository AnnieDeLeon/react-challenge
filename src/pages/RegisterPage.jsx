import { React } from "react";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";

export const RegisterPage = (props) => {
  const submitRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((successResponse) => {
        props.setToken(successResponse);
      })
      .catch((err) => {});
  };
  return (
    <DefaultLayout token={props.token}>
      <h1>Registro</h1>
      <form onSubmit={(event) => submitRegister(event)}>
        <input name="email" type="email" />
        <input name="password" type="password" />
        <input type="submit" value="Register" />
      </form>
      <p>
        Ya tienes cuenta, <Link to="/login">inicia sesión</Link>
      </p>
    </DefaultLayout>
  );
};
