import React, { useEffect, useState } from "react";
import { Post } from "./Post";

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
    <ul className="feed">
      {posts.slice(0, 2).map((post) => {
        return (
          <li>
            <Post author={post.userId} title={post.title} />
          </li>
        );
      })}
    </ul>
  );
};
