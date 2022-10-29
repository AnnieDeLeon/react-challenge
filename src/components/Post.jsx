import React from 'react'
import profilePicture from "../assets/pp.webp";
import styles from './Post.module.scss'

export const Post = (props) => {
    return (
        <article className={styles.post}>
                <img
                  className={styles.post__image} // {styles["post__image--test"]}
                  src={profilePicture}
                  alt="User avatar"
                />
                <section>
                  <section className="post__user">
                    <p>{props.author}</p>
                    <p className="post__user__time">Oct 24 (18 hours ago)</p>
                  </section>
                  <h3 className="post__title">
                    {props.title}
                  </h3>
                  <section className="post__tags">
                    <div>#javascript</div>
                    <div>#webdev</div>
                    <div>#beginners</div>
                  </section>
                  <section className="post__interactions">
                    <section>
                      <button>153 Reactions</button>
                      <button>2 Comments</button>
                    </section>
                    <button className="post__interactions__reading">
                      19 min read
                    </button>
                  </section>
                </section>
              </article>
    )
}