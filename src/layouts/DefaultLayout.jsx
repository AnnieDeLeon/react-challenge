import React, { Fragment } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
export const DefaultLayout = (props) => {
  return (
    <Fragment>
      <Navbar token={props.token} />
      {props.children}
      <Footer />
    </Fragment>
  );
};
