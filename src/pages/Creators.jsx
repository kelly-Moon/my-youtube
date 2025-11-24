import React from "react";
import Main from "../components/section/Main";
import { creatorText } from "../data/creator";
import { Link } from "react-router-dom";

const Creators = () => {
  return (
    <Main title="추천 크리에티터" description="오늘의 추천 크리에티터입니다.">
      <section id="creatorPage">
        <h2>😎 추천 크리에이터를 소개합니다.</h2>
        <div className="creator__inner">
          {creatorText.map((creator, key) => (
            <div className="creator" key={key}>
              <div className="creator_img play__icon ">
                <Link to={`/channel/${creator.channelId}`}>
                  <img src={creator.img} alt={creator.name} />
                </Link>
              </div>
              <div className="creator_info">
                <Link to={`/channel/${creator.channelId}`}>{creator.name}</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Main>
  );
};

export default Creators;
