import React from "react";
import { HiHeart } from 'react-icons/hi'
export const Footer = () => {
  return (
    <footer className="bottom-0 w-full h-8">
      <div className="py-8 text-sm font-light text-center dark:text-white-700 text-black-700">
        Built with <span className="inline-block" ><HiHeart/></span>  by jbuyu &copy;	2021
      </div>
    </footer>
  );
};
