import React, { useState } from "react";
import "./App.css";
import Header from "./common/header";
import Footer from "./common/footer";
import TabView from "./common/tabview"
import HeroContent from "./common/hero-content";
import { FaUserTie } from "react-icons/fa";
import { SlDiamond } from "react-icons/sl";
import { GiAmmoBox } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

function App() {
  return (
    <div className="px-32 text-center">
      <Header />
      <div className="bg-primary text-white">
        <nav className="flex sm:justify-center space-x-4">
          {[
            ["CASINO", "/dashboard"],
            ["LIVE", "/team"],
            ["POKER", "/projects"],
            ["VIRTUAL SPORTS", "/reports"],
            ["PROMOTION", "/reports", <SlDiamond />],
            ["VISIT PALASINO", "/reports"],
          ].map(([title, url, icon], index) => (
            <a
              href={url}
              key={index}
              className="rounded-lg px-3 py-2 text-white-700 font-medium hover:bg-white-100 hover:text-white-900"
            >
              {title === "PROMOTION" ? (
                <SlDiamond size={20} className="inline-block align-middle" />
              ) : title === "VISIT PALASINO" ? (
                <GiAmmoBox size={20} className="inline-block align-middle" />
              ) : (
                <FaUserTie size={20} className="inline-block align-middle" />
              )}
              <span className="inline-block align-middle px-2">{title}</span>
            </a>
          ))}
        </nav>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="bg-hero1 bg-no-repeat bg-cover bg-center h-96 w-full relative overlay">
            <HeroContent />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="bg-hero2 bg-no-repeat bg-cover bg-center h-96 w-full relative overlay">
            <HeroContent />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="bg-hero3 bg-no-repeat bg-cover bg-center h-96 w-full relative overlay">
            <HeroContent />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="bg-black">
      <p className="text-white py-3 opacity-40 text-xs">
        Lorum ipsum dollar sit amet dummy text for the web page, lorum ipsum
        dollar sit amet ipsum.Lorum ipsum dollar sit amet dummy text for the web page, lorum ipsum
        dollar sit amet ipsum.
      </p>
      </div>
      <TabView />
      <Footer />
    </div>
  );
}

export default App;
