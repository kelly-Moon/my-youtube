import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";
import VideoCard from "../components/video/VideoCard";

import { recipeText } from "../data/recipe";

const Recipe = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const travelPageClass = loading ? "isLoading" : "isLoaded";

  return (
    <Main title="요리 채널" description="요리 채널 페이지입니다.">
      <section id="travelPage" className={travelPageClass}>
        <h2>🥗 맛의 세계를 탐구하는 레시피 아카이브!</h2>
        <div className="video__inner">
          <VideoCard videos={recipeText} />
        </div>
      </section>
    </Main>
  );
};

export default Recipe;
