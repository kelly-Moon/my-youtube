import React from "react";
import Main from "../components/section/Main";

import Today from "../components/contents/Today";
import Creator from "../components/contents/Creator";
import VideoSlider from "../components/video/VideoSlider";

import { travelText } from "../data/travel";
import { movieText } from "../data/movie";
import { musicText } from "../data/music";
import { recipeText } from "../data/recipe";
import { studyText } from "../data/study";
import { creatorText } from "../data/creator";
import { todayText } from "../data/today";

const Home = () => {
  return (
    <Main
      title="퍼니문 유튜브"
      description="퍼니문 유튜브에 오신 것을 환영합니다"
    >
      <Today videos={todayText} id="today" />
      <Creator
        videos={creatorText}
        title="😎 추천 크리에이터를 소개합니다."
        id="creator"
      />
      <VideoSlider
        videos={travelText}
        title="✈️ 여행을 기록하고, 세계를 발견하다!"
        id="travel"
      />
      <VideoSlider
        videos={movieText}
        title="🎬 취향을 확장하는 영화 탐색 플랫폼!"
        id="movie"
      />
      <VideoSlider
        videos={musicText}
        title="🎵 취향을 울리는 음악 탐색 공간!"
        id="music"
      />
      <VideoSlider
        videos={recipeText}
        title="🥗 맛의 세계를 탐구하는 레시피 아카이브!"
        id="recipe"
      />
      <VideoSlider
        videos={studyText}
        title="💻 웹 모션 인터랙션을 탐구하는 공간!"
        id="study"
      />
    </Main>
  );
};

export default Home;
