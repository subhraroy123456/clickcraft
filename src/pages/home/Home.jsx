import React, { useEffect, useState } from "react";
import HeroImg from "../../assets/imgs/banner.png";
import Image from "react-bootstrap/Image";
import "./home.scss";

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero-top">
            <div className="svg">
              <svg
                width="29"
                height="26"
                viewBox="0 0 29 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.6579 0C7.6579 0 7.95991 2.81891 9.13629 3.99529C10.3127 5.17167 13.1316 5.47368 13.1316 5.47368C13.1316 5.47368 10.3127 5.7757 9.13629 6.95208C7.95991 8.12846 7.6579 10.9474 7.6579 10.9474C7.6579 10.9474 7.35589 8.12846 6.17951 6.95208C5.00313 5.7757 2.18422 5.47368 2.18422 5.47368C2.18422 5.47368 5.00313 5.17167 6.17951 3.99529C7.35589 2.81891 7.6579 0 7.6579 0ZM19.9737 4.10526C19.9737 4.10526 20.4267 8.33363 22.1913 10.0982C23.9558 11.8628 28.1842 12.3158 28.1842 12.3158C28.1842 12.3158 23.9558 12.7688 22.1913 14.5334C20.4267 16.2979 19.9737 20.5263 19.9737 20.5263C19.9737 20.5263 19.5207 16.2979 17.7561 14.5334C15.9915 12.7688 11.7632 12.3158 11.7632 12.3158C11.7632 12.3158 15.9915 11.8628 17.7561 10.0982C19.5207 8.33363 19.9737 4.10526 19.9737 4.10526ZM9.50589 17.3099C8.03542 15.8394 7.6579 12.3158 7.6579 12.3158C7.6579 12.3158 7.28039 15.8394 5.80991 17.3099C4.33944 18.7804 0.815796 19.1579 0.815796 19.1579C0.815796 19.1579 4.33944 19.5354 5.80991 21.0059C7.28039 22.4764 7.6579 26 7.6579 26C7.6579 26 8.03542 22.4764 9.50589 21.0059C10.9764 19.5354 14.5 19.1579 14.5 19.1579C14.5 19.1579 10.9764 18.7804 9.50589 17.3099Z"
                  fill="url(#paint0_linear_2005_22)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2005_22"
                    x1="2.66719"
                    y1="2.05263"
                    x2="29.7027"
                    y2="4.55099"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0695937" stop-color="#4467FF" />
                    <stop offset="0.816425" stop-color="#7241FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h6>Welcome to Click craft</h6>
          </div>
          <div className="hero-heading">
            <h1>
              Your Story, Your Way <span>Build Your Personal Portfolio</span>
            </h1>
            <p>
              Showcase your journey by crafting a personal portfolio in minutes
            </p>
            <div className="hero-btns">
              <a href="" className="btnn">
                Get started for free
              </a>
              <a href="" className="secondary-btnn-purple">
                Get started for free
              </a>
            </div>
          </div>
          <div className="hero-img">
            <Image src={HeroImg} fluid />;
          </div>
        </div>
      </div>



      <section className="sec2">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae optio similique a impedit atque asperiores illum fuga possimus nisi aspernatur, officia modi repudiandae nam consectetur eos animi corporis quaerat voluptatibus culpa esse eveniet magni soluta aliquam. Nobis, quia error iste, autem placeat laboriosam necessitatibus inventore omnis deserunt quod tempora!</p>
      </section>
    </>
  );
};

export default Home;