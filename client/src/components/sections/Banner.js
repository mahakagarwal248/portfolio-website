import React from "react";
import background from "../../assets/banner.png";

function Banner() {
  return (
    <div>
      <div
        className="fixed top-0 left-0 h-[100vh] w-full bg-center"
        style={{ background: `url(${background})`,backgroundSize:"cover", zIndex: "-1" }}
      ></div>
      <div className=" w-full h-[90vh] bg-bannerBlur flex flex-col items-center justify-center">
        <p className="text-white text-7xl font-semibold">I am Mahak Agarwal</p>
        <p className="text-white text-4xl mt-10">Developer |</p>
        <p className="hero-subtitle text-white">
          <span
            class="typed"
            data-typed-items="Designer, Developer, Freelancer, Photographer"
          ></span>
        </p>
      </div>
    </div>
  );
}

export default Banner;
