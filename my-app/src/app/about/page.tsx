import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
          About Me
        </h1>

        <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-4">
          Hi, I&apos;m <span className="font-semibold">Tarfeeha Hussain</span>, 
          a passionate beginner web developer exploring the exciting world of coding and development. 
          I&apos;m currently learning technologies like <span className="font-semibold">HTML</span>, 
          <span className="font-semibold">CSS</span>, <span className="font-semibold">TypeScript</span>, and <span className="font-semibold">Next.js</span>. 
          Every day, I aim to build beautiful and functional web applications while honing my skills.
        </p>

        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
          I&apos;m a curious problem-solver, excited to learn more about web design, interactive user experiences, and 
          the magic behind the internet. This is just the beginning of my journey, and I&apos;m thrilled for what’s ahead!
        </p>
      </div>
    </section>
  );
};

export default About;
