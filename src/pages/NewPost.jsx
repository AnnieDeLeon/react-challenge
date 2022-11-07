import React from "react";
import styles from "./NewPost.module.scss";

export const NewPost = (props) => {
  const tags = props.tags.split(" ");
  const date = new Date(props.date).toDateString();

  return (
<div class="container">
        <section class="subcontainer">
            <section class="createPost__content">
                <button class="createPost__content__imageButton">Add a cover image</button>
                <form class="form" onSubmit={post}>
                    <input name="title" class="createPost__content__title" type="text" placeholder="New post title here..." />
                    <input name="tags" class="createPost__content__tags" type="text" placeholder="Add up to 4 tags..." />
                    <input name="comment" class="createPost__content__content" type="text" placeholder="Write your post content here..." />
                </form>
            </section>
            <footer class="createPost__footer">
                <button class="createPost__footer__publish">Publish</button>
                <button class="createPost__footer__btn createPost__footer__btn--save">Save draft</button>
                <button class="createPost__footer__btn"><ConfigIcon/></button>
                <button class="createPost__footer__btn createPost__footer__btn--revert">Revert new changes</button>
            </footer>
        </section>
    </div>
  );
};