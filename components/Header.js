import React, {useState} from "react";
import Image from "next/image";
import { RoughNotation } from "react-rough-notation"

import {
  Link,
  smooth,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const NavItem = ({ item, href, download }) => {

  return (
    <Link
      to="projects"
      scrollspy="true"
      smooth={true}
      className="text-sm font-bold text-gray-600 px-2 py-1 hover:bg-gray-300 cursor-pointer rounded transition-colors duration-300"
    >
      {item}
    </Link>
  );
};

const Header = () => {
  const [show, setShow] = useState(true)
  return (
    <>
      <nav className="flex justify-between p-4 bg-gray-50 rounded ">
        <div className="flex items-center">
          <div className=" rounded-full  inline-block ">
            <Image
              src="/logo.png"
              width={64}
              height={64}
              className="rounded-xl"
            />
          </div>
          <span className="ml-1 text-gray-600 font-bold">JBUYU</span>
        </div>
        <div className="items-center py-6 md:py-4 ">
          <ul className="flex space-x-2">
            <NavItem item="Projects" />
            <li>
              <a
                className="text-sm font-bold text-gray-600 px-2 py-1 hover:bg-gray-300 cursor-pointer rounded transition-colors duration-300"
                href="/resume.pdf"
                target="blank"
              >
                <RoughNotation color="#4F46E5" type="circle" show={show}>
                  Resume
                </RoughNotation>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
