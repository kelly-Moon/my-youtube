import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Main from "../components/section/Main";
import VideoSearch from "../components/video/VideoSearch";
import { fetchFromAPI } from "../utils/api";

const Search = () => {
  const { searchId } = useParams();
  const [videos, setVideos] = useState([]);

  // fetch에 직접 api입력한 첫번째 방법
  // useEffect(() => {
  //   fetch(
  //     `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${searchId}&maxResults=48&key=${
  //       import.meta.env.VITE_YOUTUBE_API_KEY
  //     }`
  //   )
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result);
  //       setVideos(result.items);
  //     })
  //     .catch((error) => console.log(error));
  // }, [searchId]);

  // axios 로 비동기 작업으로 api연결 두번째 방법
  useEffect(() => {
    fetchFromAPI("search", {
      part: "snippet",
      q: searchId,
      maxResults: 48,
      type: "video",
    }).then((data) => {
      console.log(data);
      setVideos(data.items);
    });
  }, [searchId]);

  return (
    <Main title="유튜브 검색" description="유튜브 검색 페이지입니다.">
      <section id="searchPage">
        <div className="video__inner search">
          <VideoSearch videos={videos} />
        </div>
      </section>
    </Main>
  );
};

export default Search;
