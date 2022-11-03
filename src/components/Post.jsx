import React from "react";
import profilePicture from "../assets/pp.webp";
import styles from "./Post.module.scss";

export const Post = (props) => {
  return (
    <article className={styles.post}>
      <img
        className={styles.post__image} // {styles["post__image--test"]}
        src={profilePicture}
        alt="User avatar"
      />
      <section>
        <section className={styles.post__user}>
          <p>{props.author}</p>
          <p className={styles.post__user__time}>Oct 24 (18 hours ago)</p>
        </section>
        <h3 className={styles.post__title}>{props.title}</h3>
        <section className={styles.post__tags}>
          <div>#javascript</div>
          <div>#webdev</div>
          <div>#beginners</div>
        </section>
        <section className={styles.post__interactions}>
          <section>
            <button>153 Reactions</button>
            <button>2 Comments</button>
          </section>
          <button className={styles.post__interactions__reading}>
            19 min read
          </button>
        </section>
      </section>
    </article>
  );
};
