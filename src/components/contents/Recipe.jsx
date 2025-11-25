import React from "react";
import { recipeText } from "../../data/recipe";
import { Link } from "react-router-dom";

const Recipe = () => {
  return (
    <section id="recipe">
      <h2>🥗 맛의 세계를 탐구하는 레시피 아카이브!</h2>
      <div className="video__inner">
        {recipeText.map((video, key) => (
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

export default Recipe;
