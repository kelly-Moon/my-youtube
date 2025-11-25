import React from "react";
import { movieText } from "../../data/movie";
import { Link } from "react-router-dom";

const Movie = () => {
  return (
    <section id="movie">
      <h2>🎬 취향을 확장하는 영화 탐색 플랫폼!</h2>
      <div className="video__inner">
        {movieText.map((video, key) => (
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

export default Movie;
