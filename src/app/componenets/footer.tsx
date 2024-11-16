import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="m-auto w-[95%] py-20 lg:w-[90%] xl:w-[1300px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="text-zinc-800">
            <h1 className="text-xl font-bold">Core Courses</h1>
            <div className="mt-5 flex flex-col gap-3 text-sm md:text-base">
              <a className="truncate" href="/compulsory/1">
                Programming Fundamentals
              </a>
              <a className="truncate" href="#">
                Web2 Using NextJS
              </a>
              <a className="truncate" href="#">
                Earn as You Learn
              </a>
            </div>
          </div>
          <div className="text-zinc-800">
            <h1 className="text-xl font-bold">Advanced Courses</h1>
            <div className="mt-5 flex flex-col gap-3 text-sm md:text-base">
              <a href="#">Web 3 and Metaverse</a>
              <a href="#">Cloud-Native Computing</a>
              <a href="#">Artificial Intelligence (AI) and Deep Learning</a>
              <a href="#">Ambient Computing and IoT</a>
              <a href="#">Genomics and Bioinformatics</a>
              <a href="#">Network Programmability and Automation</a>
            </div>
          </div>
          <div className="text-zinc-800">
            <h1 className="text-xl font-bold">Social Links</h1>
            <div className="my-5 flex gap-3 md:text-sm">
              <a
                target="_blank"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4267B2] text-white"
                href="#"
              >
               <FaFacebook size={20} />
              </a>
              <a
                target="_blank"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF0000] text-white"
                href="#"
              >
               <FaYoutube size={20} />
              </a>
              <a
                target="_blank"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1DA1F2] text-white"
                href="#"
              >
               <FaTwitter size={20} />
              </a>
              <a
                target="_blank"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E4405F] text-white"
                href="#"
              >
                <FaInstagram size={20} />
              </a>
              <a
                target="_blank"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171515] text-white"
                href="#"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
            <a
              className="mt-4 flex items-center py-1 text-main underline"
              target="_blank"
              href="#"
            >
              <div className="mr-3 h-6 w-6">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  className="h-6 w-6 text-main"
                  height="1em"
                  width="1em"
                >
                
                </svg>
              </div>
              education@governorsindh.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
