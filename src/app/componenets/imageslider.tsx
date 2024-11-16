'use client'
import { useState, useEffect } from "react";
import Image from 'next/image';
import pic1 from '../public/pic1.jpg';
import pic2 from '../public/pic2.jpg';
import pic3 from '../public/pic3.jpg';
import pic4 from '../public/pic4.jpg';
import pic5 from '../public/pic5.jpg';
import pic6 from '../public/pic6.jpg';
import pic7 from '../public/pic7.jpg';
import pic8 from '../public/pic8.jpg';

const imagePairs = [
  [pic1, pic2],
  [pic3, pic4],
  [pic5, pic6],
  [pic7, pic8]
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const nextSlide = (): void => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePairs.length);
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mx-auto mt-4">
      <div className="overflow-hidden w-full">
        <div
          className={`flex transition-transform duration-500 ease-in-out ${
            isAnimating ? 'transform -translate-x-full' : 'transform translate-x-0'
          }`}
        >
          {imagePairs[currentIndex].map((image, idx) => (
            <div key={idx} className="relative w-[48%] h-[400px] mx-2 rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={`Slide image ${currentIndex * 2 + idx + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-4">
        {imagePairs.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-8 mx-1 ${
              index === currentIndex ? "bg-green-500" : "bg-gray-300"
            } rounded transition-all duration-500`}
          ></div>
        ))}
      </div>
    </div>
  );
}
