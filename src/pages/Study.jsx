import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";
import VideoCard from "../components/video/VideoCard";

import { studyText } from "../data/study";

const Study = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const studyPageClass = loading ? "isLoading" : "isLoaded";

  return (
    <Main title="학습 채널" description="학습 채널 페이지입니다.">
      <section id="studyPage" className={studyPageClass}>
        <h2>💻 웹 모션 인터랙션을 탐구하는 공간!</h2>
        <div className="video__inner">
          <VideoCard videos={studyText} />
        </div>
      </section>
    </Main>
  );
};

export default Study;
