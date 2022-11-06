import React from "react";
import styles from "./PostViewPage.module.scss";

export const PostViewPage = (props) => {
  const tags = props.tags.split(" ");
  const date = new Date(props.date).toDateString();

  return (
    <>
      <img
        className={styles["img img__initial"]}
        src={props.headerImg}
        alt=""
      />
      <section className={styles["px-md-5"]}>
        <div className={styles["d-flex mt-3"]}>
          <img
            src={props.userImg}
            alt=""
            className={styles["user-img-postView"]}
          />
          <div className={styles["ms-2"]}>
            <p>
              <a className={styles["user__name--post"]} href="">
                {props.username}
              </a>
              <br />
              <small className={styles["text-muted"]}>{date}</small>
            </p>
          </div>
        </div>
        <h1>{props.title}</h1>
        <a className={styles["hashtag-hover--gray ms-2"]} href="">
          <span className={styles["hashtag--gray"]}>#</span>
          {tags[0]}
        </a>
        <a className={styles["hashtag-hover--green ms-2"]} href="">
          <span className={styles["hashtag--green"]}>#</span>
          {tags[1]}
        </a>
        <a className={styles["hashtag-hover--yellow ms-2"]} href="">
          {" "}
          <span className={styles["hashtag--yellow"]}>#</span>
          {tags[2]}
        </a>
        <p>{props.description}</p>
        <img
          className={styles["img img__initial"]}
          src={props.postImg}
          alt=""
        />
      </section>
    </>
  );
};
