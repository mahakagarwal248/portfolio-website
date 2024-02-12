import React, { useState, useEffect, useMemo } from "react";
import background from "../../assets/banner2.jpg";

function Banner() {
  const [screenWidth, setScreenWidth] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [typedIndex, setTypedIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isWaiting, setIsWaiting] = useState(false);

  const typedItems = useMemo(
    () => ["Full Stack Developer|", "Freelancer|", "Coder|"],
    []
  );

  const getWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    getWidth();
    window.addEventListener("resize", getWidth);
    return () => window.removeEventListener("resize", getWidth);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTyping) {
        if (typedText.length < typedItems[typedIndex].length) {
          setTypedText(
            (prevText) => prevText + typedItems[typedIndex][typedText.length]
          );
        } else {
          setIsTyping(false);
          setIsWaiting(true);
          setTimeout(() => {
            setIsWaiting(false);
            setIsTyping(false);
          }, 1500); // Wait for 1 second before removing
        }
      } else if (!isTyping && !isWaiting && typedText.length > 0) {
        setTypedText((prevText) => prevText.slice(0, -1));
      } else if (!isTyping && !isWaiting && typedText.length === 0) {
        setIsTyping(true);
        setTypedIndex((prevIndex) => (prevIndex + 1) % typedItems.length);
      }
    }, 100); // Adjust typing speed as needed

    return () => clearInterval(interval);
  }, [typedText, typedIndex, isTyping, typedItems, isWaiting]);

  return (
    <div>
      <div
        className="fixed top-0 left-0 h-[100vh] w-full bg-center bg-cover"
        style={{
          background: screenWidth > 640 ? `url(${background})` : "",
          backgroundSize: screenWidth < 979 ? "contain" : "cover",
          backgroundRepeat: "no-repeat",
          zIndex: "-1",
        }}
      ></div>
      <div className="w-full py-16 sm:py-0 min-h-[30vh] sm:min-h-[50vh] md:min-h-[70vh] lg:min-h-[90vh] bg-[rgb(0,0,0,0.9)] sm:bg-bannerBlur flex flex-col items-center justify-center px-4">
        <p className="text-white text-6xl sm:text-7xl font-semibold">
          I am{" "}
          <span className="underline decoration-orange-500">Mahak Agarwal</span>
        </p>
        <p
          className="hero-subtitle text-white  text-3xl sm:text-4xl mt-5"
          style={{ height: "50px", overflow: "hidden" }}
        >
          {typedText}
        </p>
      </div>
    </div>
  );
}

export default Banner;
