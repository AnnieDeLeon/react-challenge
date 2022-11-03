import React, { Fragment, useState } from "react";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.scss";

function App() {
  const [token, setToken] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage token={token} />} />
        <Route
          path="/login"
          element={<LoginPage token={token} setToken={setToken} />}
        />
        <Route path="/register" element={<RegisterPage token={token} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

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

// const posts = [{name: 'Víctor', title: 'Test'}, {name: 'Annie', title: 'Test II'}]
