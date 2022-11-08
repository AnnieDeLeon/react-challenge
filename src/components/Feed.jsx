import React, { useEffect, useState } from "react";
import { Post } from "./Post";
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
              // author={post.author}
              // title={post.title}
              // date={post.date}
              // tags={post.tags}
              // likes={post.likes}
              // reading={post.reading}
              title={post.title}
              date={post.date}
              tags={post.tags}
              description={post.description}
              headerImg={post.headerImg}
              postImg={post.postImg}
              likes={post.likes}
              reading={post.reading}
              author={post.author}
            />
          </li>
        );
      })}
    </ul>
  );
};
