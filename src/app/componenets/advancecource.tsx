import React from 'react';
import Image from 'next/image';
import advancecource1 from '../public/advancecource1.jpg';
import advancecource2 from '../public/advancecource2.jpg';
import advancecource3 from '../public/advancecource3.jpg';
import advancecource4 from '../public/advancecource4.jpg';
import advancecource5 from '../public/advancecource5.jpg';
import advancecource6 from '../public/advancecource6.jpg';

function Advancecource() {
  return (
    <div>
      <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-20 mb-10">
        <h1 className="text-cyan-600 lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10">
          Advanced Courses
        </h1>
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-10">
          <a
            className="hover:scale-105 duration-200 transition-all"
            href="/tracks/ai/4"
          >
            <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
              <Image
                alt="Artificial Intelligence"
                src={advancecource1}
                width={450}
                height={300}
                className="object-cover w-full"
              />
              <div className="px-4 flex justify-center items-center h-[70px]">
                <span>Artificial Intelligence</span>
              </div>
            </div>
          </a>
          <a
            className="hover:scale-105 duration-200 transition-all"
            href="/tracks/wmd/4"
          >
            <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
              <Image
                alt="Web 3 and Metaverse"
                src={advancecource2}
                width={450}
                height={300}
                className="object-cover w-full"
              />
              <div className="px-4 flex justify-center items-center h-[70px]">
                <span>Web 3 and Metaverse</span>
              </div>
            </div>
          </a>
          <a
            className="hover:scale-105 duration-200 transition-all"
            href="/tracks/cnc/4"
          >
            <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
              <Image
                alt="Cloud-Native Computing"
                src={advancecource3}
                width={450}
                height={300}
                className="object-cover w-full"
              />
              <div className="px-4 flex justify-center items-center h-[70px]">
                <span>Cloud-Native Computing</span>
              </div>
            </div>
          </a>
          <a
            className="hover:scale-105 duration-200 transition-all"
            href="/tracks/iot/4"
          >
            <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
              <Image
                alt="Ambient Computing and IoT"
                src={advancecource4}
                width={450}
                height={300}
                className="object-cover w-full"
              />
              <div className="px-4 flex justify-center items-center h-[70px]">
                <span>Ambient Computing and IoT</span>
              </div>
            </div>
          </a>
          <a
            className="hover:scale-105 duration-200 transition-all"
            href="/tracks/gbs/4"
          >
            <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
              <Image
                alt="Genomics and Bioinformatics"
                src={advancecource5}
                width={450}
                height={300}
                className="object-cover w-full"
              />
              <div className="px-4 flex justify-center items-center h-[70px]">
                <span>Genomics and Bioinformatics</span>
              </div>
            </div>
          </a>
          <a
            className="hover:scale-105 duration-200 transition-all"
            href="/tracks/npa/4"
          >
            <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
              <Image
                alt="Network Programmability and Automation"
                src={advancecource6}
                width={450}
                height={300}
                className="object-cover w-full"
              />
              <div className="px-4 flex justify-center items-center h-[70px]">
                <span>Network Programmability and Automation</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Advancecource;
