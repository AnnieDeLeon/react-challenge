import React, { useState } from "react";
import "./NewPost.scss";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Navigate } from "react-router-dom";
export const NewPostPage = (props) => {
  const [login, setLogin] = useState(false);
  console.log(props.token);

  const createPost = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const tags = formData.get("tags");
    const description = formData.get("description");

    fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: props.token.token,
      },
      body: JSON.stringify({
        title,
        tags,
        description,
      }),
    })
      .then((res) => res.json())
      .then((successResponse) => {
        if (successResponse.success) {
          setLogin(successResponse);
        }
      });
  };
  if (login) {
    return <Navigate to="/" />;
  }
  return (
    <DefaultLayout token={props.token}>
      <div className="container">
        <section className="subcontainer">
          <section className="createPost__content">
            <form className="form" onSubmit={(event) => createPost(event)}>
              <input
                name="title"
                className="createPost__content__title"
                type="text"
                placeholder="New post title here..."
              />
              <input
                name="tags"
                className="createPost__content__tags"
                type="text"
                placeholder="Add up to 4 tags..."
              />
              <input
                name="description"
                className="createPost__content__content"
                type="text"
                placeholder="Write your post content here..."
              />
              <input
                className="form-register__button"
                type="submit"
                value="Publish"
              />
            </form>
          </section>
        </section>
      </div>
    </DefaultLayout>
  );
};
