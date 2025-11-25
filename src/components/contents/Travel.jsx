import React from "react";
import { travelText } from "../../data/travel";
import { Link } from "react-router-dom";

const Travel = () => {
  return (
    <section id="travel">
      <h2>✈️ 여행을 기록하고, 세계를 발견하다!</h2>
      <div className="video__inner">
        {travelText.map((video, key) => (
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

export default Travel;
