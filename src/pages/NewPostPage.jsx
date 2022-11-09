import React from "react";
import "./NewPost.scss";
import { DefaultLayout } from "../layouts/DefaultLayout";
export const NewPostPage = (props) => {

   
    
return (
    <DefaultLayout>
    <div className="container">
        <section className="subcontainer">
            <section className="createPost__content">
                <button className="createPost__content__imageButton">Add a cover image</button>
                <form className="form" >
                    <input name="title" className="createPost__content__title" type="text" placeholder="New post title here..." />
                    <input name="tags" className="createPost__content__tags" type="text" placeholder="Add up to 4 tags..." />
                    <input name="comment" className="createPost__content__content" type="text" placeholder="Write your post content here..." />
                </form>
            </section>
            <footer className="createPost__footer">
                <button className="createPost__footer__publish">Publish</button>
                <button className="createPost__footer__btn createPost__footer__btn--save">Save draft</button>
                <button className="createPost__footer__btn"></button>
                <button className="createPost__footer__btn createPost__footer__btn--revert">Revert new changes</button>
            </footer>
        </section>
    </div>
    </DefaultLayout>
  );
}