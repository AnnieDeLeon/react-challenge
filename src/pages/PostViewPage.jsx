import React, { useEffect, useState } from "react";
import styles from "./PostViewPage.module.scss";
// import { Post } from "./Post";
// import { Feed } from "./Feed";
import { DefaultLayout } from "../layouts/DefaultLayout";
import profilePicture from "../assets/pp.webp";

// React components here

// userParams here
// import { useParams } from "react-router-dom";

export const PostViewPage = (props) => {
  // const [post, setPost] = useState([]);
  const [title, setTitle] = useState([]);
  const [date, setDate] = useState();
  const [tags, setTags] = useState();
  const [description, setDescription] = useState();
  const [headerImg, setHeaderImg] = useState();
  const [postImg, setPostImg] = useState();
  // const [likes, setLikes] = useState();
  // const [reading, setReading] = useState();
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/posts/6349f79293dc64bb308dca0b", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // setPost(response.data.posts);
        setTitle(response.data.title);
        setDate(response.data.date);
        setTags(response.data.tags);
        setDescription(response.data.description);
        setHeaderImg(response.data.headerImg);
        setPostImg(response.data.postImg);
        // setLikes(response.data.likes);
        // setReading(response.data.reading);
        setAuthor(response.data.author);
      });
  }, []);
  return (
    <DefaultLayout>
      <img className={styles["img img__initial"]} src={headerImg} alt="" />
      <section className={styles["px-md-5"]}>
        <div className={styles["d-flex mt-3"]}>
          <img
            src={profilePicture}
            alt=""
            className={styles["user-img-postView"]}
          />
          <div className={styles["ms-2"]}>
            <p>
              <a className={styles["user__name--post"]} href=" ">
                {author}
              </a>
              <br />
              <small className={styles["text-muted"]}>{date}</small>
            </p>
          </div>
        </div>
        <h1>{title}</h1>
        <a className={styles["hashtag-hover--gray ms-2"]} href=" ">
          <span className={styles["hashtag--gray"]}>#</span>
          {tags}
          {/*{tags[0]} */}
        </a>
        <a className={styles["hashtag-hover--green ms-2"]} href=" ">
          <span className={styles["hashtag--green"]}>#</span>
          {tags}
          {/*{tags[1]} */}
        </a>
        <a className={styles["hashtag-hover--yellow ms-2"]} href=" ">
          <span className={styles["hashtag--yellow"]}>#</span>
          {tags}
          {/*{tags[2]} */}
        </a>
        <p>{description}</p>
        <img className={styles["img img__initial"]} src={postImg} alt="" />
      </section>
    </DefaultLayout>
  );
};
