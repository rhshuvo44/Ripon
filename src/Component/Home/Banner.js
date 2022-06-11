import React from "react";
import TypeAnimation from "react-type-animation";
import bg from "../../Images/bg.mp4";
import "./Banner.css";

const Banner = () => {
  return (
    <div class="hero min-h-screen banner">
      <video autoplay loop id="myVideo">
        <source src={bg} type="video/mp4" />
      </video>
      <div class="hero-content text-center">
        <div class="max-w-lg">
          <button class="btn hover:bg-none bg-transparent px-8 rounded-bl-3xl rounded-tr-3xl capitalize">
            Hello There!
          </button>
          <div className="py-10">
            <h1 class="md:text-4xl text-xl font-bold">
              <TypeAnimation
                cursor={true}
                sequence={[
                  "I'm Ripon Hossain Shuvo",
                  1000,
                  "I'm Front-End Developer",
                  1000,
                  "Lives in Bangladesh",
                  1000,
                ]}
                wrapper="h2"
                repeat={Infinity}
              />
            </h1>
          </div>

          <a
            href="https://drive.google.com/u/0/uc?id=1W2yNWz9CUFkGHB4vQMPvzk3h5DonSQmj&export=download"
            class="btn btn-primary mt-10"
          >
            resume download
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
