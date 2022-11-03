import React from "react";
import styles from "./AsideRight.module.scss";
export const AsideRight = () => {
  return (
    <aside className={styles["sidebar"]}>
      <section className={styles["card"]}>
        <section className={styles["listings--see-all"]}>
          <p className={styles["card__title"]}>Listings</p>
          <a className={styles["see-all"]} href="#">
            <small>See all</small>
          </a>
        </section>
        <section className={styles["sidebar-element"]}>
          <p className={styles["sidebar-element__title"]}>
            🆘 Help Needed for Low-code Framework for Node.js
          </p>
          <p className={styles["sidebar-element__category"]}>collabs</p>
        </section>
        <section className={styles["sidebar-element"]}>
          <p className={styles["sidebar-element__title"]}>
            🚨🚨🚨 tsParticles is looking for contributors, any kind of
            JavaScript/TypeScript experience is welcome ⭐️⭐️⭐️
          </p>
          <p className={styles["sidebar-element__category"]}>collabs</p>
        </section>
        <section className={styles["sidebar-element"]}>
          <p className={styles["right-aside--strong"]}>Create a Listing</p>
        </section>
      </section>
      <section className={styles["card"]}>
        <p className={styles["card__title"]}>#help</p>
        <section className={styles["sidebar-element"]}>
          <p className={styles["sidebar-element__title"]}>
            How do you estimate/calculate costs of new features for clients?
          </p>
          <div className={styles["sidebar-element__new-tag-wrapper"]}>
            <p className={styles["sidebar-element__new-tag"]}>New</p>
          </div>
        </section>
        <section className={styles["sidebar-element"]}>
          <p className={styles["sidebar-element__title"]}>
            Append multiple strings to a single QLabel in PyQt5
          </p>
          <div className={styles["sidebar-element__new-tag-wrapper"]}>
            <p className={styles["sidebar-element__new-tag"]}>New</p>
          </div>
        </section>
      </section>
    </aside>
  );
};
