import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";
import VideoCard from "../components/video/VideoCard";

import { travelText } from "../data/travel";

const Travel = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const travelPageClass = loading ? "isLoading" : "isLoaded";

  return (
    <Main title="여행 채널" description="여행 채널 페이지입니다.">
      <section id="travelPage" className={travelPageClass}>
        <h2>✈️ 여행을 기록하고, 세계를 발견하다!</h2>
        <div className="video__inner">
          <VideoCard videos={travelText} />
        </div>
      </section>
    </Main>
  );
};

export default Travel;
