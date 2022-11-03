import React, { Fragment } from "react";
import { Navbar } from "../components/Navbar";
export const DefaultLayout = (props) => {
  return (
    <Fragment>
      <Navbar token={props.token} />
      {props.children}
      <footer>Esto es un footer</footer>
    </Fragment>
  );
};
