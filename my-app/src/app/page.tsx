"use client";
import React from "react";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <div
      className="min-h-screen bg-no-repeat bg-[url(/images/profile.png)] bg-right lg:bg-[85%] bg-cover relative pt-20"
      style={{ backgroundSize: "35%" }}
    >
      <div className="absolute inset-0 flex items-center justify-center lg:justify-start px-4 lg:px-10">
        <div className="text-white text-center lg:text-left ml-6 sm:ml-16 lg:ml-20 mb-12 sm:mb-16 mt-12 sm:mt-20 lg:mt-32">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-lg sm:text-xl lg:text-5xl font-serif leading-tight">
              Hello, I&apos;m
            </span>
          </h1>

          <div
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold"
            aria-label="Type Animation introducing myself"
          >
            <TypeAnimation
              sequence={[
                "Tarfeeha Hussain",
                1000,
                "Web Designer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </div>

          <div className="mt-8 text-lg sm:text-xl lg:text-2xl font-light max-w-2xl mx-auto lg:mx-0">
            <p>
              I&apos;m a passionate web designer with a focus on creating beautiful
              and functional user experiences. With experience in UI/UX design,
              I specialize in crafting responsive, user-friendly websites that
              make an impact. I&apos;m always eager to learn and take on new
              challenges in the ever-evolving world of web design.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-6 sm:gap-4">
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-600 text-white font-semibold rounded-full hover:bg-gradient-to-l hover:from-pink-600 hover:to-purple-400 transition duration-300"
            >
              Hire Me
            </a>

            <a
              href="/path-to-your-cv.pdf"
              download="Tarfeeha_Hussain_CV"
              className="inline-block px-6 py-3 bg-white text-gray-900 font-semibold rounded-full border-2 border-gray-300 hover:bg-gray-100 hover:border-gray-500 transition duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
