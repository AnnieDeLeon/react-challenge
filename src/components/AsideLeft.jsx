import React from "react";
import { ReactComponent as HomeIcon } from "../assets/home.svg";
import { ReactComponent as ReadingList } from "../assets/reading-list.svg";
import { ReactComponent as Listings } from "../assets/listings.svg";
import { ReactComponent as Podcast } from "../assets/podcasts.svg";
import { ReactComponent as Videos } from "../assets/videos.svg";
import { ReactComponent as Tags } from "../assets/tags.svg";
import { ReactComponent as FAQ } from "../assets/faq.svg";
import { ReactComponent as ForemShop } from "../assets/forem-shop.svg";
import { ReactComponent as Sponsors } from "../assets/sponsors.svg";
import { ReactComponent as About } from "../assets/about.svg";
import { ReactComponent as Contact } from "../assets/contact.svg";
import { ReactComponent as Guides } from "../assets/guides.svg";
import { ReactComponent as SoftwareComparisons } from "../assets/software-comparisons.svg";
import { ReactComponent as CodeOfConduct } from "../assets/code-of-conduct.svg";
import { ReactComponent as PrivacyPolicy } from "../assets/privacy-policy.svg";
import { ReactComponent as TermsOfUse } from "../assets/terms-of-use.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Facebook } from "../assets/facebook.svg";
import { ReactComponent as GitHub } from "../assets/github.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as Twitch } from "../assets/twitch.svg";
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
              <ReadingList />
              Reading List
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              <Listings />
              Listings
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              <Podcast />
              Podcasts
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              <Videos />
              Videos
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              <Tags />
              Tags
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              <FAQ />
              FAQ
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              <ForemShop />
              Forem Shop
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              <Sponsors />
              Sponsors
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              <About />
              About
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              <Contact />
              Contact
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              <Guides />
              Guides
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              <SoftwareComparisons />
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
              <CodeOfConduct />
              Code of Conduct
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              <PrivacyPolicy />
              Privacy Policy
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              <TermsOfUse />
              Terms of use
            </div>
          </li>
          <li>
            <div className={styles["navbar__navigation-item"]}>
              <ul className={styles["social-media"]}>
                <li>
                  <Twitter className={styles["fill-social-media"]} />
                </li>
                <li>
                  <Facebook className={styles["fill-social-media"]} />
                </li>
                <li>
                  <GitHub className={styles["fill-social-media"]} />
                </li>
                <li>
                  <Instagram className={styles["fill-social-media"]} />
                </li>
                <li>
                  <Twitch className={styles["fill-social-media"]} />
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
      <section className={styles["my-tags"]}>
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
      </section>
    </aside>
  );
};
