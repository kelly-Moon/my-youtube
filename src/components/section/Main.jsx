import React from "react";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";

// 주의!! idex.html에서 <meta name="description"...> 지우기
// 콘솔창에서 확인해보기 document.querySelector('meta[name="description"]')

const Main = (props) => {
  return (
    <>
      <Helmet
        titleTemplate="%s | My-Youtube"
        defaultTitle="My-Youtube"
        defer={false}
      >
        {props.title && <title>{props.title}</title>}
        {props.description && (
          <meta
            name="description"
            content={props.description}
            key="description"
          />
        )}
      </Helmet>
      <Header />
      <main id="main" role="main">
        <Search />
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Main;
