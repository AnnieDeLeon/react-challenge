import React from 'react'
import styles from './Footer.module.scss'

export const Footer = () =>{
    return (
        <footer className={styles["container-fluid"]}>
      <section className={styles["container", "font"]}>
        <div className={styles.row}>
          <div className={styles["col-12"]}>
            <section className={styles["d-flex","footer"]}>
            <p className={styles["aling-paragraph"]}>
              <a className={styles["anchors-styles"]} href="#">DEV Community</a> — A constructive and inclusive
              social network for software developers. With you every step of
              your journey.
            </p>
            <p className={styles["aling-paragraph"]}>
              Built on <a className={styles["anchors-styles"]} href="#">Forem</a> — the
              <a className={styles["anchors-styles"]} href="#">open source</a> software that powers
              <a className={styles["anchors-styles"]} href="#">DEV</a> and other inclusive communities.
            </p>
              <br /> 
            <p className={styles["aling-paragraph"]}> Made with love and <a className={styles["anchors-styles"]} href="#"> Ruby on Rails</a>. Dev Community © 2016 -
              2022.
            </p>
            <p className={styles["aling-paragraph"]}>
              <a className={styles["plant-icon"]} href="https://www.forem.com/">
                <img src="./assets/home/footer-section.scss/plant-icon.svg" alt="Forem Logo" />
              </a>
            </p>
          </section>
          </div>
        </div>
      </section>
    </footer>
    )
}