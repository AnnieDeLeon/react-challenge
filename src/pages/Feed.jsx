import React, { useEffect, useState } from "react";
import { Post } from "./PostViewPage";
import styles from "./Feed.module.scss";

export const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/posts", {
      method: "GET",
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
            <Post
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
    </ul>
  );
};
