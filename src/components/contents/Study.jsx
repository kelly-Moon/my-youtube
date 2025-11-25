import React from "react";
import { studyText } from "../../data/study";
import { Link } from "react-router-dom";

const Study = () => {
  return (
    <section id="study">
      <h2>💻 웹 모션 인터랙션을 탐구하는 공간!</h2>
      <div className="video__inner">
        {studyText.map((video, key) => (
          <div className="video" key={key}>
            <div className="video__thumb play__icon">
              <Link to={`/video/${video.videoId}`}>
                <img src={video.img} alt={video.title} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Study;
