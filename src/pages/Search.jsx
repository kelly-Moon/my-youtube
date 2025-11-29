import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Main from "../components/section/Main";
import VideoSearch from "../components/video/VideoSearch";
import { fetchFromAPI } from "../utils/api";

const Search = () => {
  const { searchId } = useParams();
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // 전체 흐름 : URL에서 searchId 받아옴 → useEffect로 검색 API 실행 → videos 상태에 데이터 저장 → 버튼 누르면 다음 페이지(API의 nextPageToken)로 추가 로딩
  useEffect(() => {
    setVideos([]); // 기존 검색 영역 비우기
    fetchVideos(searchId); // 새 검색 실행
    setLoading(true);
  }, [searchId]);

  const fetchVideos = (query, pageToken = "") => {
    fetchFromAPI("search", {
      part: "snippet",
      q: query,
      type: "video",
      pageToken: pageToken,
      // `search?part=snippet&type=video&q=${query}&pageToken=${pageToken}`
    })
      .then((data) => {
        setNextPageToken(data.nextPageToken);
        setVideos((preVideos) => [...preVideos, ...data.items]);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
        setLoading(false);
      });
  };

  const handleLoadMore = () => {
    if (nextPageToken) {
      fetchVideos(searchId, nextPageToken);
    }
  };

  const searchPageClass = loading ? "isLoading" : "isLoaded";

  return (
    <Main title="유튜브 검색" description="유튜브 검색 페이지입니다.">
      <section id="searchPage" className={searchPageClass}>
        <h2>
          👽<em>{searchId}</em> 검색 결과입니다
        </h2>
        <div className="video__inner search">
          <VideoSearch videos={videos} />
        </div>
        <div className="video__more">
          {nextPageToken && <button onClick={handleLoadMore}>더보기</button>}
        </div>
      </section>
    </Main>
  );
};

export default Search;
