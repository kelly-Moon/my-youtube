import React from "react";
import { CiBaseball } from "react-icons/ci";
import { CiCoins1 } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiFries } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Header = () => {
  return (
    <header id="header" role="banner">
      <h1 className="header__logo">
        <a href="/">
          <em aria-hidden="true"></em>
          <span>
            my -
            <br />
            youtube
          </span>
        </a>
      </h1>

      <nav className="header__menu">
        <ul className="menu">
          <li className="active">
            <a href="/">
              <CiBaseball /> 퍼니문
            </a>
          </li>
          <li>
            <a href="/today">
              <CiMoneyBill /> 추천 영상
            </a>
          </li>
          <li>
            <a href="/creators">
              <CiCoins1 /> 추천 크리에이터
            </a>
          </li>
          <li>
            <a href="/travel">
              <CiBoxes /> 여행 채널
            </a>
          </li>
          <li>
            <a href="/movie">
              <CiBullhorn /> 영화 채널
            </a>
          </li>
          <li>
            <a href="/music">
              <CiCoffeeCup /> 음악 채널
            </a>
          </li>
          <li>
            <a href="/recipe">
              <CiDumbbell /> 요리 채널
            </a>
          </li>
          <li>
            <a href="/study">
              <CiFries /> 스터디 채널
            </a>
          </li>
        </ul>
        <ul className="keyword">
          <li>
            <a href="/search/travel">TRAVEL</a>
          </li>
          <li>
            <a href="/search/html">HTML</a>
          </li>
          <li>
            <a href="/search/css">CSS</a>
          </li>
          <li>
            <a href="/search/javascript">JavaScript</a>
          </li>
          <li>
            <a href="/search/react.js">React.js</a>
          </li>
          <li>
            <a href="/search/vue.js">Vue.js</a>
          </li>
          <li>
            <a href="/search/next.js">Next.js</a>
          </li>
          <li>
            <a href="/search/node.js">Node.js</a>
          </li>
          <li>
            <a href="/search/sql">SQL</a>
          </li>
          <li>
            <a href="/search/React Portfolio">portfolio</a>
          </li>
          <li>
            <a href="/search/NewJeans">music</a>
          </li>
        </ul>
      </nav>

      <div className="header__sns">
        <ul>
          <li>
            <a href="https://github.com" rel="noopener noreferrer">
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com" rel="noopener noreferrer">
              <AiFillYoutube />
            </a>
          </li>
          <li>
            <a href="https://codepen.io" rel="noopener noreferrer">
              <AiOutlineCodepen />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" rel="noopener noreferrer">
              <AiOutlineInstagram />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
