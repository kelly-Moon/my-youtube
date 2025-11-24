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

export const headerMenus = [
  {
    title: "퍼니문",
    icon: CiBaseball,
    src: "/",
  },
  {
    title: "오늘의 추천 영상",
    icon: CiMoneyBill,
    src: "/today",
  },
  {
    title: " 추천 크리에이터",
    icon: CiCoins1,
    src: "/creators",
  },
  {
    title: "여행 채널",
    icon: CiBoxes,
    src: "/travel",
  },
  {
    title: "영화 채널",
    icon: CiBullhorn,
    src: "/movie",
  },
  {
    title: "음악 채널",
    icon: CiCoffeeCup,
    src: "/music",
  },
  {
    title: "요리 채널",
    icon: CiDumbbell,
    src: "/recipe",
  },
  {
    title: "스터디 채널",
    icon: CiFries,
    src: "/study",
  },
];

export const searchKeyword = [
  {
    title: "TRAVEL",
    src: "/search/travel",
  },
  {
    title: "HTML",
    src: "/search/html",
  },
  {
    title: "CSS",
    src: "/search/css",
  },
  {
    title: "JavaScript",
    src: "/search/javascript",
  },
  {
    title: "React.js",
    src: "/search/react.js",
  },
  {
    title: "Vue.js",
    src: "/search/vue.js",
  },
  {
    title: "Next.js",
    src: "/search/next.js",
  },
  {
    title: "Node.js",
    src: "/search/node.js",
  },
  {
    title: "SQL",
    src: "/search/sql",
  },
  {
    title: "portfolio",
    src: "/search/React Portfolio",
  },
  {
    title: "music",
    src: "/search/NewJeans",
  },
];

export const snsLink = [
  {
    title: "github",
    url: "https://github.com",
    icon: AiFillGithub,
  },
  {
    title: "youtube",
    url: "https://www.youtube.com",
    icon: AiFillYoutube,
  },
  {
    title: "codepen",
    url: "https://codepen.io",
    icon: AiOutlineCodepen,
  },
  {
    title: "instagram",
    url: "https://www.instagram.com",
    icon: AiOutlineInstagram,
  },
];
