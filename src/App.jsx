import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Today = lazy(() => import("./pages/Today"));
const Creators = lazy(() => import("./pages/Creators"));
const Travel = lazy(() => import("./pages/Travel"));
const Movie = lazy(() => import("./pages/Movie"));
const Music = lazy(() => import("./pages/Music"));
const Recipe = lazy(() => import("./pages/Recipe"));
const Study = lazy(() => import("./pages/Study"));
const Channel = lazy(() => import("./pages/Channel"));
const Video = lazy(() => import("./pages/Video"));
const Search = lazy(() => import("./pages/Search"));
const Not = lazy(() => import("./pages/Not"));

// import Home from "./pages/Home";
// import Today from "./pages/Today";
// import Creators from "./pages/Creators";
// import Travel from "./pages/Travel";
// import Movie from "./pages/Movie";
// import Music from "./pages/Music";
// import Recipe from "./pages/Recipe";
// import Study from "./pages/Study";
// import Channel from "./pages/Channel";
// import Video from "./pages/Video";
// import Search from "./pages/Search";
// import Not from "./pages/Not";

import Layout from "./components/section/Layout";
import Loading from "./components/Loading";
import Main from "./components/section/Main";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/today" element={<Today />} />
          <Route path="/creators" element={<Creators />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/music" element={<Music />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/study" element={<Study />} />
          <Route path="/channel/:channelID" element={<Channel />} />
          <Route path="/video/:videoID" element={<Video />} />
          <Route path="/search/:searchID" element={<Search />} />
          <Route path="*" element={<Not />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
