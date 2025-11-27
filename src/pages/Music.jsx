import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";
import VideoCard from "../components/video/VideoCard";

import { musicText } from "../data/music";

const Music = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const musicPageClass = loading ? "isLoading" : "isLoaded";

  return (
    <Main title="음악 채널" description="음악 채널 페이지입니다.">
      <section id="musicPage" className={musicPageClass}>
        <h2>🎵 취향을 울리는 음악 탐색 공간!</h2>
        <div className="video__inner">
          <VideoCard videos={musicText} />
        </div>
      </section>
    </Main>
  );
};

export default Music;
