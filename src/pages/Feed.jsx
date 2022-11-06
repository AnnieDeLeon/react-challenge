import React, { useEffect, useState } from "react";
import { PostViewPage } from "./PostViewPage.module.scss";
import styles from "./Feed.module.scss";

export const Feed = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/posts/6349f79293dc64bb308dca0b", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setPosts(response.data.posts);
      });
  }, []);
  return (
    <ul className={styles.feed}>
      {posts.map((post) => {
        return (
          <li>
            <PostViewPage
              author={post.author}
              title={post.title}
              date={post.date}
              tags={post.tags}
              likes={post.likes}
              reading={post.reading}
            />
          </li>
        );
      })}
      ∫
    </ul>
  );
};
