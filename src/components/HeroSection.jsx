// HeroSection.jsx
import React, { useEffect, useState } from "react";

// Import images from the assets folder
import img1 from "../assets/Features/charts.png";
import img2 from "../assets/Features/commets.png";
import img3 from "../assets/Features/nlp.png";
import img4 from "../assets/Features/ui.png";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [img1, img2, img3, img4]; // Use imported images

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col md:flex-row gap-[80px] items-center justify-between h-screen w-screen px-[80px] py-6 bg-gray-100 overflow-x-hidden">
      <div className="text-center md:text-left w-[35%] md:w-1/2">
        <h1 className="text-[40px] font-bold mb-4">
          Transform Customer Insights with Advanced NLP
        </h1>
        <p className="text-[25px] text-gray-600 mb-6">
          Discover a powerful tool designed to classify customer intent with
          precision. Analyze datasets, interpret single comments, and gain
          actionable insights to improve customer satisfaction and business
          outcomes. Start leveraging NLP technology today!
        </p>
        <button className="px-6 py-3 text-[20px] font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
          Try it
        </button>
      </div>
      <div className="relative md:w-1/2 flex items-center justify-center">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
