import React from 'react';
import Image from 'next/image';
import cource1 from '../public/cource1.jpg';
import cource2 from '../public/cource2.jpg';
import cource3 from '../public/cource3.jpg';

function Cources() {
  return (
    <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-10 mb-10">
      <h1 className="text-cyan-600 lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10">
        Core Courses Sequence
      </h1>
      <div className="grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-5 mt-10">
        <a
          className="hover:scale-105 duration-200 transition-all"
          href="/compulsory/1"
        >
          <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col items-start text-left text-zinc-600 text-lg font-bold">
            <div className="w-full">
              <Image
                alt="programming fundamentals"
                loading="lazy"
                width={450}
                height={300}
                className="object-cover w-full"
                src={cource1}
              />
            </div>
            <div className="px-4 flex items-center h-[70px]">
              <span>Programming Fundamentals</span>
            </div>
          </div>
        </a>
        <a
          className="hover:scale-105 duration-200 transition-all"
          href="/compulsory/2"
        >
          <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col items-start text-left text-zinc-600 text-lg font-bold">
            <div className="w-full">
              <Image
                alt="nextjs"
                loading="lazy"
                width={450}
                height={300}
                className="object-cover w-full"
                src={cource2}
              />
            </div>
            <div className="px-4 flex items-center h-[70px]">
              <span>Web2 Using NextJS</span>
            </div>
          </div>
        </a>
        <a
          className="hover:scale-105 duration-200 transition-all"
          href="/compulsory/3"
        >
          <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col items-start text-left text-zinc-600 text-lg font-bold">
            <div className="w-full">
              <Image
                alt="nextjs"
                src={cource3}
                loading="lazy"
                width={450}
                height={300}
                className="object-cover w-full"
              />
            </div>
            <div className="px-4 flex items-center h-[70px]">
              <span>Earn as You Learn</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Cources;
