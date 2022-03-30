import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
    <a target="_blank" rel="noreferrer" href={link} className="mt-2 py-2">
      <div className="min-h-1/5 flex max-w-full transform cursor-pointer items-center justify-center px-5 py-2 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110">
        <div className="w-full max-w-6xl overflow-hidden rounded shadow-xl  md:flex md:h-80">
          {pane === 'left' && (
            <div className="flex w-full items-center bg-white px-3 pb-3 pt-3 text-white md:w-1/2">
              <Image
                className="h-full w-full rounded-md"
                src={image}
                alt={alt}
                width={688}
                height={400}
              />
            </div>
          )}
          {pane === 'left' ? (
            <div className="flex w-full flex-col justify-center bg-white p-4 text-gray-600 md:w-1/2 md:text-right">
              <div className=" dark:text-white-900 text-black-900 pt-2 pb-2 text-xl font-bold md:text-xl">
                {name}
              </div>
              <div className="md:text-md dark:text-white-700 text-black-700 text-base font-medium ">
                {summary}
              </div>
              <p className="pt-4 pb-4 tracking-tight md:ml-auto md:text-right">
                {description}
              </p>
              <span className="flex flex-row space-x-3 break-normal rounded-md bg-gray-100 font-medium md:ml-auto md:text-right">
                {technologies.map((technology, index) => (
                  <p key={index}>{technology.tech}</p>
                ))}
              </span>
            </div>
          ) : (
            <div className="flex w-full flex-col justify-center bg-white p-4 text-gray-600 md:w-1/2 md:text-left">
              <div className=" dark:text-white-900 text-black-900 pt-2 pb-2 text-xl font-bold md:text-xl">
                {name}
              </div>
              <div className="md:text-md dark:text-white-700 text-black-700 text-base font-medium ">
                {summary}
              </div>
              <p className="pt-4 pb-4 tracking-tight md:mr-auto md:text-left">
                {description}
              </p>
              <span className="flex flex-row space-x-3 break-normal rounded-md bg-gray-100 font-medium md:mr-auto md:text-left">
                {technologies.map((technology, index) => (
                  <p key={index}>{technology.tech}</p>
                ))}
              </span>
            </div>
          )}
          {pane === 'right' && (
            <div className="flex w-full items-center bg-white px-3 pb-3 pt-3 text-white md:w-1/2 md:justify-end">
              <Image
                className="h-full w-full rounded-md"
                src={image}
                alt={image}
                width={688}
                height={400}
              />
            </div>
          )}
        </div>
      </div>
    </a>
  )
}
