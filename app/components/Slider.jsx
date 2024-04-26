"use client";

import { useRef, useEffect, Suspense, useState } from "react";
import { register } from "swiper/element/bundle";

register();

const Slider = ({ reviews }) => {
  const [init, setInit] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      spaceBetween: 32,
      slidesPerView: 1,
      navigation: true,
      pagination: {
        // clickable: true,
        type: "fraction",
        // type: "progressbar",
        // type: "bullets",
      },
      loop: true,
      //   autoplay: { delay: 3000 },

      //custom styling
      injectStyles: [
        `
        .swiper {
            position: static !important;
          }

        .swiper-button-next, .swiper-button-prev {
          color: rgba(255, 255, 255, 0.3);
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          color: rgba(255, 255, 255, 0.6);
        }
        
        .swiper-button-next:active,
        .swiper-button-prev:active {
          color: rgba(255, 255, 255, 1);
        }

        .swiper-pagination {
            top: -32px !important;
            height: fit-content !important;
            width: fit-content !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
          }
       
        
        .swiper-pagination-fraction-active {
            background-color: #fff;
          }

          .swiper-pagination-fraction {
            color: #00B3FF;
          }
        `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
    setInit(true);
  }, []);
  {
  }
  return (
    <div>
      <div className={`${init ? "visible" : "collapse"}`}>
        <swiper-container ref={swiperRef} init="false">
          {reviews.map((item, index) => (
            <swiper-slide key={index}>{item}</swiper-slide>
          ))}
        </swiper-container>
      </div>
    </div>
  );
};

export default Slider;
