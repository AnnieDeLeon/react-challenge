import React, { useState } from "react";
import { AsideLeft } from "./AsideLeft";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { ReactComponent as BellIcon } from "../assets/bell.svg";
import { ReactComponent as HamburgerIcon } from "../assets/hamburger.svg";

export const MobileNav = (props) => {
  const { setShowMobileNav } = props;
  return (
    <section className={styles["mobile-navbar"]}>
      <section className={styles["mobile-navbar__button"]}>
        <div className={styles["mobile-navbar__display"]}>
          <h4>DEV Community 👩‍💻👨‍💻</h4>
          <button onClick={() => setShowMobileNav(false)}>X</button>
        </div>
        <AsideLeft />
      </section>
    </section>
  );
};

// Sustituir clases-renombrar
export const Navbar = (props) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <nav className={styles["main-navigation"]}>
      {showMobileNav && (
        <MobileNav setShowMobileNav={setShowMobileNav} />
        // <MobileNav closeMobileNav={() => setShowMobileNav(false)} />
      )}
      <section className={styles["desktop-navbar"]}>
        <section className={styles["desktop-navbar__left"]}>
          <button
            onClick={() => setShowMobileNav(true)}
            className={styles["navbar-hamburger"]}
          >
            <HamburgerIcon />
          </button>
          <Link to="/">
            <img
              className={styles["desktop-navbar__left__image"]}
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt="Dev.to Logo"
            />
          </Link>
          <div className={styles["desktop-navbar__left__search"]}>
            <input type="text" placeholder="Search..." />
            <button>
              <SearchIcon />
            </button>
          </div>
        </section>
        <section className={styles["desktop-navbar__actions"]}>
          {props.token ? (
            <button className="desktop-navbar__actions__create-post">
              <Link to="/newpostpage">Create post</Link>
            </button>
          ) : (
            <Link to="/login">Login</Link>
          )}
          <button>
            <BellIcon />
          </button>
          <button>
            <img
              className={styles["desktop-navbar__actions__image"]}
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--s6Axi-46--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/174537/25c17f15-3c29-4947-82dd-1a0b25eb6d21.png"
              alt="User avatar"
            />
          </button>
        </section>
      </section>
    </nav>
  );
};
