import React from "react";
import Main from "../components/section/Main";

import Today from "../components/contents/Today";
import Creator from "../components/contents/Creator";
import Travel from "../components/contents/Travel";
import Movie from "../components/contents/Movie";
import Music from "../components/contents/Music";
import Recipe from "../components/contents/Recipe";
import Study from "../components/contents/Study";

const Home = () => {
  return (
    <Main
      title="퍼니문 유튜브"
      description="퍼니문 유튜브에 오신 것을 환영합니다"
    >
      <Today />
      <Creator />
      <Travel />
      <Movie />
      <Music />
      <Recipe />
      <Study />
    </Main>
  );
};

export default Home;
