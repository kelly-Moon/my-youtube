import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Today from "./pages/Today";
import Travel from "./pages/Travel";
import Movie from "./pages/Movie";
import Music from "./pages/Music";
import Fashion from "./pages/Fashion";
import Recipe from "./pages/Recipe";
import Study from "./pages/Study";
import Channel from "./pages/Channel";
import Video from "./pages/Video";
import Search from "./pages/Search";
import Not from "./pages/Not";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/today" element={<Today />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/music" element={<Music />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/study" element={<Study />} />
        <Route path="/channel/:channelID" element={<Channel />} />
        <Route path="/video/:videoID" element={<Video />} />
        <Route path="/search/:searchID" element={<Search />} />
        <Route path="/*" element={<Not />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
