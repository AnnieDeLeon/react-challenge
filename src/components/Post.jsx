import React from "react";
import profilePicture from "../assets/pp.webp";
import styles from "./Post.module.scss";
import { Link } from "react-router-dom";

export const Post = (props) => {
  const tags = props.tags.split(" ");
  const date = new Date(props.date).toDateString();

  return (
    <article className={styles.post}>
      <img
        className={styles.post__image} // {styles["post__image--test"]}
        src={profilePicture}
        alt="User avatar"
      />
      <section>
        <section className={styles.post__user}>
          <p>
            {props.author.name}
            {props.author.lastName}
          </p>
          <p className={styles.post__user__time}>{date}</p>
        </section>
        <h3 className={styles.post__title}>
          <Link to="/postview">{props.title}</Link>
        </h3>
        <section className={styles.post__tags}>
          <div>#{tags[0]}</div>
          <div>#{tags[1]}</div>
          <div>#{tags[2]}</div>
        </section>
        <section className={styles.post__interactions}>
          <section>
            <button>{props.likes} likes</button>
            <button>Comments</button>
          </section>
          <button className={styles.post__interactions__reading}>
            {props.reading}
          </button>
        </section>
      </section>
    </article>
  );
};
