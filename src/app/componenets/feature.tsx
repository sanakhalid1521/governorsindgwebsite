import React from 'react'
import Image from 'next/image'
import image1 from '../public/image1.jpg'
import image2 from '../public/image2.jpg'
import image3 from '../public/image3.jpg'
import pic1 from '../public/image2.jpg';
import pic2 from '../public/pic1.jpg';
import pic3 from '../public/pic3.jpg';
import pic4 from '../public/pic4.jpg';
import pic5 from '../public/pic5.jpg';
import pic6 from '../public/pic6.jpg';
import pic7 from '../public/pic7.jpg';
import pic8 from '../public/pic8.jpg';

function Feature() {
  return (
    <div>
      <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto sm:mt-20 mt-10 border-b border-zinc-300 pb-10">
        <h1 className="text-cyan-600 text-center xl:text-[36px] sm:text-[32px] text-xl sm:leading-[2.5rem] leading-[1.75rem] text-main font-extrabold m-auto md:w-[95%]">
          Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur
          Developing Billion-Dollar Valued Developers and Solopreneurs
        </h1>
        
        {/* Paragraph */}
        <p className="sm:mt-10 mt-7 mb-8 xl:text-[1.25rem] sm:text-[1.2rem] text-[1rem] text-zinc-800 sm:tracking-wider tracking-normal text-justify">
          The pace of technological change is accelerating, big players like
          Microsoft, Amazon, Google, and OpenAI are winning by providing
          infrastructure, large AI foundation models, frameworks, 3D Metaverse
          experiences, and massive distribution networks. Solopreneurs trained in this
          program will win by automating work typically outsourced to employees, by
          directly connecting to customers by eliminating the middleman, and by
          developing vertical metaverses, thus paving the way for the first
          billion-dollar valued solopreneur businesses. This program has the objective
          to train this new breed of billion-dollar solopreneurs. These solopreneurs
          will adopt the ultra-lean business model and work independently and will not
          need to hire employees or other team members.
        </p>
        
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-5 mt-10 m-3 sm:m-0">
          <Image
            src={image1}
            alt="image1"
            loading="lazy"
            width={1088}
            height={896}
            className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full"
          />
          <Image
            src={image2}
            alt="image2"
            loading="lazy"
            width={500}
            height={375}
            className="shadow-2xl shadow-black rounded-lg h-[300px] w-full"
          />
          <Image
            src={image3}
            alt="image3"
            loading="lazy"
            width={1088}
            height={896}
            className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full"
          />
        </div>

        {/* Image slider */}
        <div className="mt-10 w-full">
          {/* Add your slick slider code here */}
        </div>
      </div>
    </div>
  )
}

export default Feature
