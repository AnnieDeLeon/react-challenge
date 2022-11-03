import React, { useEffect, useState } from "react";
import { Post } from "./Post";
import styles from "./Feed.module.scss";

export const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setPosts(json);
      });
  }, []);
  return (
    <ul className={styles.feed}>
      {posts.slice(0, 5).map((post) => {
        return (
          <li>
            <Post author={post.userId} title={post.title} />
          </li>
        );
      })}
    </ul>
  );
};
