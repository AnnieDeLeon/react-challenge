import { React } from "react";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { AsideLeft } from "../components/AsideLeft";
import { Feed } from "../components/Feed";
import { AsideRight } from "../components/AsideRight";
import { Footer } from "../components/Footer";
export const HomePage = (props) => {
  return (
    <DefaultLayout token={props.token}>
      <section className="layout">
        <div className="aside-left__nav">
          <AsideLeft />
        </div>
        <main className="post-main">
          <Feed />
        </main>
        <AsideRight />
      </section>
    </DefaultLayout>
  );
};
