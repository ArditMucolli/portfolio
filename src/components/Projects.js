import React from "react";
import { projectData } from "../data/projectData";

const Projects = () => {
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full text-white py-20 md:h-full "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projectData.map(({ id, src, name, github, live }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 p-5"
              />
              <span className=" px-12 m-6 text-2xl font bold text-white tracking-wider sm:text-1xl">
                {name}
              </span>
              <div className="flex items-center justify-center">
                <a href={live} target="_blank" rel="noreferrer">
                  <button className="cursor-pointer w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={github} target="_blank" rel="noreferrer">
                  <button className="cursor-pointer w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
