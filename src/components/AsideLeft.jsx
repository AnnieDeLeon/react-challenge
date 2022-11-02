import React from "react";
import { ReactComponent as HomeIcon } from "../assets/home.svg";
import styles from "./AsideLeft.module.scss";
export const AsideLeft = () => {
  return (
    <aside className={styles["navbars"]}>
      <nav className={styles["navbar"]}>
        <ul className={styles["navbar__list"]}>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              <HomeIcon />
              Home
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              <HomeIcon />
              Reading List
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              <HomeIcon />
              Listings
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              <HomeIcon />
              Podcasts
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              <HomeIcon />
              Videos
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              <HomeIcon />
              Tags
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              <HomeIcon />
              FAQ
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              <HomeIcon />
              Forem Shop
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              <HomeIcon />
              Sponsors
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              <HomeIcon />
              About
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              <HomeIcon />
              Contact
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              <HomeIcon />
              Guides
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              <HomeIcon />
              Software comparisons
            </div>
          </li>
        </ul>
      </nav>
      <nav className={styles["navbar"]}>
        <p className={styles["navbar__title"]}>Other</p>
        <ul className={styles["navbar__list"]}>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              <HomeIcon />
              Code of Conduct
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              <HomeIcon />
              Privacy Policy
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              <HomeIcon />
              Terms of use
            </div>
          </li>
          <li>
            <div className={styles["navbar__navigation-item"]}>
              <HomeIcon className={styles["fill-social-media"]} />
              <HomeIcon className={styles["fill-social-media"]} />
              <HomeIcon className={styles["fill-social-media"]} />
              <HomeIcon className={styles["fill-social-media"]} />
              <HomeIcon className={styles["fill-social-media"]} />
            </div>
          </li>
        </ul>
      </nav>
      <nav className={styles["navbar"]}>
        <p className={styles["navbar__title"]}>My Tags</p>
        <ul className={styles["navbar__list"]}>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>#webdev</div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>#webdev</div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>#webdev</div>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
