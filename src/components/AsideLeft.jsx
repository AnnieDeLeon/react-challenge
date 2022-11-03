import React from "react";
import { ReactComponent as HomeIcon } from "../assets/home.svg";
import { ReactComponent as ReadingListIcon } from "../assets/readingList.svg";

export const AsideLeft = () => {
  return (
    <aside className="navbars">
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__list-item">
            <div className="navbar__navigation-item">
              <HomeIcon />
              Home
            </div>
          </li>
          <li className="navbar__list-item">
            <div className="navbar__navigation-item">
              <ReadingListIcon />
              Reading List
            </div>
          </li>
        </ul>
      </nav>
      <nav className="navbar">
        <p className="navbar__title">Other</p>
        <ul className="navbar__list">
          <li className="navbar__list-item">
            <div className="navbar__navigation-item">
              <HomeIcon />
              Home
            </div>
          </li>
          <li className="navbar__list-item">
            <div className="navbar__navigation-item">
              <HomeIcon />
              Home
            </div>
          </li>
        </ul>
      </nav>
      <nav className="navbar">
        <p className="navbar__title">My Tags</p>
        <ul className="navbar__list">
          <li className="navbar__list-item">
            <div className="navbar__navigation-item">#webdev</div>
          </li>
          <li className="navbar__list-item">
            <div className="navbar__navigation-item">#webdev</div>
          </li>
          <li className="navbar__list-item">
            <div className="navbar__navigation-item">#webdev</div>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
