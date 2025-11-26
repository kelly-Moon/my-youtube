import React, { use, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

const Creator = ({ videos, title, id }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  const creatorClass = loading ? "isLoading" : "isLoded";

  return (
    <section id={id} className={creatorClass}>
      <h2>{title}</h2>
      <div className="creator__inner">
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 15,
            },
            1240: {
              slidesPerView: 8,
              spaceBetween: 15,
            },
            1640: {
              slidesPerView: 9,
              spaceBetween: 20,
            },
            2000: {
              slidesPerView: 10,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {videos.map((creator, key) => (
            <SwiperSlide key={key}>
              <div className="creator">
                <div className="creator_img play__icon ">
                  <Link to={`/channel/${creator.channelId}`}>
                    <img src={creator.img} alt={creator.name} />
                  </Link>
                </div>
                <div className="creator_info">
                  <Link to={`/channel/${creator.channelId}`}>
                    {creator.name}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Creator;
