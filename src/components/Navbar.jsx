import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { ReactComponent as BellIcon } from "../assets/bell.svg";

// function sum(){

// }

// sum()

const MobileNav = (props) => {
  const { setShowMobileNav } = props;
  return (
    <section
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        backgroundColor: "rgba(0,0,0,0.25)",
      }}
    >
      <section
        style={{ backgroundColor: "white", height: "100%", width: "80%" }}
      >
        <button onClick={() => setShowMobileNav(false)}>X</button>
        <ul>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </section>
    </section>
  );
};

// function sum(){

// }

// const mySum = sum

// mySum()

// Sustituir clases-renombrar
export const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <nav className="main-navigation">
      {showMobileNav && (
        <MobileNav setShowMobileNav={setShowMobileNav} />
        // <MobileNav closeMobileNav={() => setShowMobileNav(false)} />
      )}
      <section className="desktop-navbar">
        <section className="desktop-navbar__left">
          <button
            onClick={() => setShowMobileNav(true)}
            className="navbar-hamburger"
          >
            HAM
          </button>
          <Link to="/">
            <img
              className="desktop-navbar__left__image"
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt="Dev.to Logo"
            />
          </Link>
          <div className="desktop-navbar__left__search ">
            <input type="text" placeholder="Search..." />
            <button>
              <SearchIcon />
            </button>
          </div>
        </section>
        <section className="desktop-navbar__actions">
          <Link to="/login">Login</Link>
          {/* <button className="desktop-navbar__actions__create-post">
            Create Post
          </button> */}
          <button>
            <BellIcon />
          </button>
          <button>
            <img
              className="desktop-navbar__actions__image h-8 w-8 rounded-full"
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--s6Axi-46--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/174537/25c17f15-3c29-4947-82dd-1a0b25eb6d21.png"
              alt="User avatar"
            />
          </button>
        </section>
      </section>
    </nav>
  );
};
