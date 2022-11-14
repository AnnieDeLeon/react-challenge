// import React, { useEffect, useState } from "react";
// import { PostViewPage } from "./PostViewPage.module.scss";
// import styles from "./Feed.module.scss";

// export const Feed = () => {
//   const [posts, setPosts] = useState();
//   useEffect(() => {
//     fetch("http://localhost:8080/posts/636de7d3b7e3e0e707a1d735", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then((response) => {
//         setPosts(response.data.posts);
//       });
//   }, []);
//   return (
//     <PostViewPage
//       id={posts._id}
//       title={posts.title}
//       author={posts.author}
//       date={posts.date}
//       tags={posts.tags}
//       likes={posts.likes}
//       reading={posts.reading}
//     />
//   );
// };
