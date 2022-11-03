import { React } from "react";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { AsideLeft } from "../components/AsideLeft";
import { Feed } from "../components/Feed";
import { AsideRight } from "../components/AsideRight";

export const HomePage = (props) => {
  return (
    <DefaultLayout token={props.token}>
      <section className="layout">
        <AsideLeft />
        <main>
          <Feed />
        </main>
        <AsideRight />
      </section>
    </DefaultLayout>
  );
};
