import React, { useEffect, useState } from "react";
import "./PostViewPage.scss";
import profilePicture from "../assets/pp.webp";
import { DefaultLayout } from "../layouts/DefaultLayout";
// import { Post } from "./Post";
// import { Feed } from "./Feed";

// React components here

// userParams here
// import { useParams } from "react-router-dom";

export const PostViewPage = (props) => {
  // const [post, setPost] = useState([]);
  const [title, setTitle] = useState([]);
  const [date, setDate] = useState();
  const [tags, setTags] = useState();
  const [description, setDescription] = useState();
  const [headerImg, setHeaderImg] = useState();
  const [postImg, setPostImg] = useState();
  // const [likes, setLikes] = useState();
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/posts/6349f79293dc64bb308dca0b", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // setPost(response.data.posts);
        setTitle(response.data.title);
        setDate(response.data.date);
        setTags(response.data.tags);
        setDescription(response.data.description);
        setHeaderImg(response.data.headerImg);
        setPostImg(response.data.postImg);
        // setLikes(response.data.likes);
        setAuthor(response.data.author);
      });
  }, []);
  return (
    <DefaultLayout>
      <section class="container">
        <div class="row">
          <aside class="aside__left--post col-12 col-md-1 p-0">
            <section class="aside__left--fixed">
              <ul class="post post--list mb-md-5">
                <li class="aside-icon mb-md-4">
                  <button class="btn__aside p-0">
                    <svg
                      class="icon icon__fill-red"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-hidden="true"
                      // class="crayons-icon"
                    />
                    <path d="M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154zM4.575 5.383a4.5 4.5 0 000 6.364L12 19.172l7.425-7.425a4.5 4.5 0 10-6.364-6.364L8.818 9.626 7.404 8.21l3.162-3.162a4.5 4.5 0 00-5.99.334l-.001.001z"></path>
                    <p class="mb-0" id="likes-postView"></p>
                  </button>
                </li>
                <li class="aside-icon mb-md-4">
                  <button class="btn__aside p-0">
                    <svg
                      class="icon icon__fill-green"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-hidden="true"
                      // class="crayons-icon"
                    >
                      <path d="M5.645 8.013c.013-.265-.261-.323-.4-.183-1.16 1.17-1.822 3.865-.344 7.32.294.961 1.938 3.19.84 6.131l-.003.006c-.094.255.206.404.366.263 1.395-1.226 1.933-3.593 1.1-6.375-.488-1.657-1.955-4.226-1.559-7.162zm-3.22 2.738c.05-.137-.124-.417-.326-.225-.939.893-1.316 2.863-.976 4.605.547 2.878 2.374 3.526 2.066 6.629-.028.102.176.38.348.154 1.546-2.033.409-4.453-.241-6.006-1.005-2.386-1.087-4.118-.871-5.157zM22.2 3.543l-8.579 3.68c-.332-.343-.615-.63-.76-.773-.527-.517.313-4.224-.409-4.439-.933-.277-5.042 4.624-4.696 7.953.224 2.735 2.193 4.89 1.72 8.412 3.446-.644 4.841 1.697 5.83 2.45 1.752 1.335 5.155-.551 3.807-3.582-.193-.435-2.05-4.732-2.931-6.775l6.619-5.94c.486-.44-.003-1.242-.601-.986zm-9.418 9.535a.828.828 0 01-.74-.9.825.825 0 01.81-.76c.479 0 .85.42.81.903a.824.824 0 01-.88.757z"></path>
                    </svg>
                    <p class="mb-0">15</p>
                  </button>
                </li>
                <li class="aside-icon mb-md-2">
                  <button class="btn__aside p-0">
                    <svg
                      class="icon icon__fill-purple"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-hidden="true"
                      // class="crayons-icon"
                    >
                      <path d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1zm13 2H6v15.432l6-3.761 6 3.761V4z"></path>
                    </svg>
                    <p class="mb-0">6</p>
                  </button>
                </li>
                <li class="aside-icon mb-md-2">
                  <button class="btn__aside p-0 icon">
                    <b>. . .</b>
                  </button>
                </li>
              </ul>
            </section>
          </aside>
          <main
            class={["main__post--view col-12 col-md-11 col-lg-8 p-0 p-md-0"]}
          >
            <article class="p-2" id="getPost-view">
              <img class="img img__initial" src={headerImg} alt="" />
              <section class="px-md-5">
                <div class="d-flex mt-3">
                  <img src={profilePicture} alt="" class="user-img-postView" />
                  <div class="ms-2">
                    <p>
                      <a class="user__name--post" href=" ">
                        {author}
                      </a>
                      <br />
                      <small class="text-muted">{date}</small>
                    </p>
                  </div>
                </div>
                <h1>{title}</h1>
                <a class="hashtag-hover--gray ms-2" href=" ">
                  <span class="hashtag--gray">#</span>
                  {tags}
                  {/*{tags[0 */}
                </a>
                <a class="hashtag-hover--green ms-2" href=" ">
                  <span class="hashtag--green">#</span>
                  {tags}
                  {/*{tags[1 */}
                </a>
                <a class="hashtag-hover--yellow ms-2" href=" ">
                  <span class="hashtag--yellow">#</span>
                  {tags}
                  {/*{tags[2 */}
                </a>
                <p>{description}</p>
                <img class="img img__initial" src={postImg} alt="" />
              </section>
            </article>
            <section class="comments p-2 pt-3 mt-5">
              <br />
              <div class="comments-title d-flex justify-content-between">
                <h2>Discussion (18)</h2>
                <button>Subscribe</button>
              </div>
              <br />
              <article class="d-flex mt-2 col-12 ">
                <img
                  class="comments--img"
                  src="./assets/home/main-section-articles/user-perfil.webp"
                  alt=""
                />
                <input
                  class="comments__input comments__input--user ms-1"
                  type="text"
                />
              </article>
              <article class="d-flex mt-4">
                <div class="comments--cursor mt-3">
                  <img
                    class="comments--img"
                    src="./assets/home/main-section-articles/comments-1.webp"
                    alt=""
                  />
                  <img
                    class="ms-1 mt-3"
                    src="./assets/home/main-section-articles/hilo.svg"
                    alt=""
                  />
                </div>
                <div class="card comments__card position-static">
                  <div class="card-body">
                    <p>
                      <a href=" ">Sonny Li</a>
                      <small class="text-muted">· 29 Jul</small>
                    </p>
                    <p class="d-flex justify-content-center">
                      <img
                        class="comments-gif g-1"
                        src="./assets/home/main-section-articles/git-comments.gif"
                        alt=""
                      />
                    </p>
                  </div>
                </div>
              </article>
              <p class="comments__align--paragraph">
                <a class="comments__align--anchor" href=" ">
                  Code of Conduct
                </a>{" "}
                •{" "}
                <a class="comments__align--anchor" href=" ">
                  Report abuse
                </a>
              </p>
            </section>

            <section class="read-next ps-2 pd-2 ps-md-0">
              <br />
              <h3 class="ps-5">Read next</h3>
              <div class="d-flex ps-md-5">
                <img
                  class="read-next--user"
                  src="./assets/home/main-section-articles/read-next_1.webp"
                  alt=""
                />
                <div>
                  <p class="ms-2 read-next--hover">
                    <a class="user__name--post" href=" ">
                      Consistency between Cache and Database, Part 2
                    </a>
                    <br />
                    <small class="text-muted read-next--hover">
                      ChunTing Wu - Jul 11
                    </small>
                  </p>
                </div>
              </div>
              <div class="d-flex ps-md-5">
                <img
                  class="read-next--user"
                  src="./assets/home/main-section-articles/read-next_2.webp"
                  alt=""
                />
                <div>
                  <p class="ms-2 read-next--hover">
                    <a class="user__name--post" href=" ">
                      Weekly Challenge 174
                    </a>
                    <br />
                    <small class="text-muted read-next--hover">
                      Simon Green - Jul 24
                    </small>
                  </p>
                </div>
              </div>
              <div class="d-flex ps-md-5  pb-3">
                <img
                  class="read-next--user"
                  src="./assets/home/main-section-articles/read-next_3.webp"
                  alt=""
                />
                <div>
                  <p class="ms-2 read-next--hover">
                    <a class="user__name--post" href=" ">
                      Getting started with Sanity
                    </a>
                    <br />
                    <small class="text-muted read-next--hover">
                      Simon Green - Jul 24
                    </small>
                  </p>
                </div>
              </div>
            </section>
          </main>
          <aside class="aside-right__view col-12 col-md-11 col-lg-3 ps-md-5 ps-lg-0 ms-lg-3">
            <section class="aside-right-post mt-2">
              <div class="card card__right--post card--bg position-static">
                <div class="card-body p-0 col-12">
                  <section class="bg-black" href="">
                    <img
                      class="aside__right--icon ps-md-2"
                      src="./assets/home/rigth-aside-article/codedex.webp"
                      alt=""
                    />
                    <span class="card-title title__codedex--bold">Codédex</span>
                  </section>
                  <p class="px-2 pt-3">
                    <a href=" " class="btn btn-primary d-grid gap-2">
                      Follow
                    </a>
                  </p>
                  <p class="aside__right--text ps-2">
                    Start your coding adventure!
                  </p>
                </div>
              </div>
            </section>
            <section class="aside-right-post mt-5">
              <div class="card  position-static card__trending--bg p-4">
                <div class="card-body p-0">
                  <h3>
                    Trending on <a href=" ">DEV Community</a>
                  </h3>
                  <article class="trending--hover">
                    <section class="d-flex">
                      <img
                        class="trending--user"
                        src="./assets/home/rigth-aside-article/trending-1.webp"
                        alt=""
                      />
                      <p class="m-0">
                        Everyone Can Do DevRel (But Should They?)
                      </p>
                    </section>
                    <p class="ms-3">
                      <a class="trending--anchors ms-2" href=" ">
                        #career
                      </a>
                      <a class="trending--anchors ms-2" href=" ">
                        #help
                      </a>
                      <a class="trending--anchors ms-2" href=" ">
                        #management
                      </a>
                    </p>
                  </article>
                  <article class="trending--hover">
                    <section class="d-flex">
                      <img
                        class="trending--user"
                        src="./assets/home/rigth-aside-article/trending-2.webp"
                        alt=""
                      />
                      <p class="m-0">
                        Everyone Can Do DevRel (But Should They?)
                      </p>
                    </section>
                    <p class="ms-3">
                      <a class="trending--anchors ms-2" href=" ">
                        #devrel
                      </a>
                      <a class="trending--anchors ms-2" href=" ">
                        #community
                      </a>
                      <a class="trending--anchors ms-2" href=" ">
                        #beginners
                      </a>
                      <a class="trending--anchors ms-2" href=" ">
                        #career
                      </a>
                    </p>
                  </article>
                  <article class="trending--hover">
                    <section class="d-flex">
                      <img
                        class="trending--user"
                        src="./assets/home/rigth-aside-article/trending-3.webp"
                        alt=""
                      />
                      <p class="m-0">
                        Everyone Can Do DevRel (But Should They?)
                      </p>
                    </section>
                    <p class="ms-3">
                      <a class="trending--anchors ms-2" href=" ">
                        #webdev
                      </a>
                      <a class="trending--anchors ms-2" href=" ">
                        #tutorial
                      </a>
                      <a class="trending--anchors ms-2" href=" ">
                        #codenewbie
                      </a>
                      <a class="trending--anchors ms-2" href=" ">
                        #nextjs
                      </a>
                    </p>
                  </article>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </section>
    </DefaultLayout>
  );
};
