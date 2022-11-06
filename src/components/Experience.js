import React from "react";
import html from "../assets/experience/html.png";
import css from "../assets/experience/css.png";
import javascript from "../assets/experience/javascript.png";
import reactImage from "../assets/experience/react.png";
import tailwind from "../assets/experience/tailwind.png";
import bootstrap from "../assets/experience/bootstrap.png";
import github from "../assets/experience/github.png";
import python from "../assets/experience/python.png";
import php from "../assets/experience/php.png";
import mySql from "../assets/experience/mySql.png";
import shopify from "../assets/experience/shopify.jpg";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: python,
      title: "Python",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: php,
      title: "PHP",
      style: "shadow-purple-500",
    },
    {
      id: 6,
      src: reactImage,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 8,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-blue-500",
    },
    {
      id: 9,
      src: mySql,
      title: "MySql",
      style: "shadow-orange-500",
    },
    {
      id: 10,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500",
    },
    {
      id: 11,
      src: shopify,
      title: "Shopify",
      style: "shadow-green-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-20 text-center py-8 px-12 px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
