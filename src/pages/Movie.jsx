import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";
import VideoCard from "../components/video/VideoCard";

import { movieText } from "../data/movie";

const Movie = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const moviePageClass = loading ? "isLoading" : "isLoaded";

  return (
    <Main title="영화 채널" description="영화 채널 페이지입니다.">
      <section id="moviePage" className={moviePageClass}>
        <h2>🎬 취향을 확장하는 영화 탐색 플랫폼!</h2>
        <div className="video__inner">
          <VideoCard videos={movieText} />
        </div>
      </section>
    </Main>
  );
};

export default Movie;
