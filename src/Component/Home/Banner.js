import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div class="hero min-h-screen banner">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <button class="btn hover:bg-none bg-transparent px-8 rounded-bl-3xl rounded-tr-3xl capitalize">
            Hello There!
          </button>
          <div className="py-10">
            <h1 class="text-4xl font-bold">I'm Ripon Hossain Shuvo</h1>
            <h1 class="text-4xl font-bold">I'm a Designer</h1>
            <h1 class="text-4xl font-bold">Lives in Bangladesh</h1>
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
