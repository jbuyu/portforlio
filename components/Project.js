import React from "react";
import Image from "next/image";
import Link from "next/link"
export const Project = ({
  pane,
  name,
  summary,
  description,
  technologies,
  link,
  image,
  alt,
}) => {
  return (
    <a target="_blank"
      rel="noreferrer" href={link} className="py-2 mt-2">
      <div className="max-w-full min-h-1/5 flex items-center justify-center px-5 py-2 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        <div className="rounded shadow-xl overflow-hidden w-full md:flex  max-w-6xl md:h-80">
          {pane === "left" && (
            <div className="flex w-full md:w-1/2 px-3 pb-3 pt-3 bg-white text-white items-center">
              <Image
                className="w-full h-full rounded-md"
                src={image}
                alt={alt}
                width={240}
                height={408}
              />
            </div>
          )}
          {pane === "left" ? (
            <div className="flex flex-col w-full md:w-1/2 p-4 bg-white text-gray-600 md:text-right justify-center">
              <div className=" pt-2 pb-2 text-xl font-bold md:text-xl dark:text-white-900 text-black-900">
                {name}
              </div>
              <div className="text-base font-medium md:text-md dark:text-white-700 text-black-700 ">
                {summary}
              </div>
              <p className="pt-4 pb-4 md:ml-auto md:text-right tracking-tight">
                {description}
              </p>
              <span className="flex flex-row space-x-3 md:text-right md:ml-auto font-medium bg-gray-100 rounded-md break-normal">
                {technologies.map((technology, index) => (
                  <p key={index}>{technology.tech}</p>
                ))}
              </span>
            </div>
          ) : (
            <div className="flex flex-col w-full md:w-1/2 p-4 bg-white text-gray-600 md:text-left justify-center">
              <div className=" pt-2 pb-2 text-xl font-bold md:text-xl dark:text-white-900 text-black-900">
                {name}
              </div>
              <div className="text-base font-medium md:text-md dark:text-white-700 text-black-700 ">
                {summary}
              </div>
              <p className="pt-4 pb-4 md:mr-auto md:text-left tracking-tight">
                {description}
              </p>
              <span className="flex flex-row space-x-3 md:text-left md:mr-auto font-medium bg-gray-100 rounded-md break-normal">
                {technologies.map((technology, index) => (
                  <p key={index}>{technology.tech}</p>
                ))}
              </span>
            </div>
          )}
          {pane === "right" && (
            <div className="flex w-full md:w-1/2 px-3 pb-3 pt-3 bg-white text-white items-center md:justify-end">
              <Image
                className="w-full h-full rounded-md"
                src={image}
                alt={image}
                width={240}
                height={408}
              />
            </div>
          )}
        </div>
      </div>
    </a>
  );
};
