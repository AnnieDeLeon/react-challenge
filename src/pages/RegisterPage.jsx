import { React } from "react";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Link } from "react-router-dom";

export const RegisterPage = (props) => {
  return (
    <DefaultLayout token={props.token}>
      <h1>RegisterPage</h1>
      <p>
        Ya tienes cuenta, <Link to="/login">inicia sesión</Link>
      </p>
    </DefaultLayout>
  );
};
