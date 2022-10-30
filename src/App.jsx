import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Feed } from "./components/Feed";
import { Navbar } from "./components/Navbar";
import { AsideLeft } from "./components/AsideLeft";
import { AsideRight } from "./components/AsideRight";
import { Footer } from "./components/Footer";
import "./App.scss";

const LoginPage = () => {
  return (
    <DefaultLayout>
      <h1>LoginPage</h1>
      <p>
        No tienes cuenta, <Link to="/register">¡regístrate!</Link>
      </p>
    </DefaultLayout>
  );
};

const RegisterPage = () => {
  return (
    <DefaultLayout>
      <h1>RegisterPage</h1>
      <p>
        Ya tienes cuenta, <Link to="/login">inicia sesión</Link>
      </p>
    </DefaultLayout>
  );
};

const DefaultLayout = (props) => {
  return (
    <Fragment>
      <Navbar />
      {props.children}
      <Footer />
    </Fragment>
  );
};

// const sum = (a,b) => {
//   const result = a+b
//   const resultMinusOne = a+b-1
//   return result resultMinusOne
// }
// const Sum = (props) => {
//   return (
//   <h1>Hola</h1>
//   <h2>Adios<</h2>
//   )
// }

// const Sum = (props) => {
//   return (
//   React.createElement('div',null, [React.create('h1'), React.create('h2')])
// }

const HomePage = () => {
  return (
    <DefaultLayout>
      <section className="layout">
        <AsideLeft />
        <main>
          <Feed />
        </main>
        <AsideRight />
      </section>
    </DefaultLayout>
  );
};

// const posts = [{name: 'Víctor', title: 'Test'}, {name: 'Annie', title: 'Test II'}]

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
