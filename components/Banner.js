import React from "react";
import Image from "next/image";
import { InboxInIcon } from "@heroicons/react/outline";

const Banner = () => {

  return (
    <div className="mt-10 md:mt-16 px-2">
      <p className=" text-indigo-600 mt-6 flex items-center py-4 text-xl italic font-bold p-2">
        To learn. build. share.
      </p>
      <div className="text-center md:text-left md:flex max-w-7xl">
        <div className="max-w-3xl relative">
          <h1 className="font-bold text-4xl leading-tight max-w-xl text-left p-2">
            Intuitive Web-Based Experiences
          </h1>
          <h4 className="max-w-2xl p-2 text-left leading-tight">
            I'm a Full Stack Software Engineer building unique and useful
            software applications that offer value. I Mostly build projects
            with
            <strong>Typescript, Node</strong>, <strong>React/vue & </strong>
            <strong> MongoDB/PostgreSQL</strong>. Lately, I've been
            experimenting with <strong>Rust & Flutter.</strong>
          </h4>
          <div className="md:absolute bottom-0 py-3 space-x-8 flex flex-grow items-center w-60 text-center ">
            <a
              href="https://github.com/jbuyu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/github.svg" height={64} width={64} />
            </a>
            <a
              href="https://www.linkedin.com/in/jbuyu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/linkedin.svg" height={64} width={64} />
            </a>
            <a
              href="https://twitter.com/buyujustus/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/twitter.svg" height={64} width={64} />
            </a>
          </div>
        </div>
        <div className="hidden md:block items-center relative">
          <Image src="/programmer.svg" width={600} height={600} />
          <div className="flex items-center space-x-3 text-md font-bold bg-indigo-400 hover:bg-indigo-500 rounded-full p-2 w-1/2 absolute right-0 bottom-0 text-gray-100 hover:text-gray-300">
            <InboxInIcon height={18} className="inline-block" />
            <a href="mailto:jbuyu.code@gmail.com">jbuyu.code@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
