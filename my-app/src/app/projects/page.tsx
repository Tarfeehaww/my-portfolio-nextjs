import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Countdown Timer",
    description:
      "A countdown timer in Next.js is a dynamic component that displays the time remaining until a specific event, updating in real-time using React hooks. It's perfect for adding interactivity to your portfolio for events or launches.",
    image: "/images/countdown timer.jpg",
    alt: "Countdown Timer",
    link: "#",
  },
  {
    id: 2,
    title: "Static Resume Builder",
    description:
      "A simple resume builder app created using HTML and CSS. This project demonstrates the use of static HTML and CSS to create a clean and user-friendly resume layout.",
    image: "/images/Static.JPG",
    alt: "Static Resume Builder",
    link: "#",
  },
  {
    id: 3,
    title: "Dynamic Resume Builder",
    description:
      "A dynamic resume builder app built with HTML, CSS, and JavaScript, allowing users to create and edit resumes with a modern and interactive interface.",
    image: "/images/Dynamic.JPG",
    alt: "Dynamic Resume Builder",
    link: "#",
  },
  {
    id: 4,
    title: "Editable Resume Builder",
    description:
      "A resume builder with editable features using HTML, CSS, and JavaScript. This project allows users to dynamically edit and generate their resume.",
    image: "/images/Editable.JPG",
    alt: "Editable Resume Builder",
    link: "#",
  },
  {
    id: 5,
    title: "Makeup Website",
    description:
      "A makeup website created using Next.js and Tailwind CSS.",
    image: "/images/makeup.JPG",
    alt: "Makeup Website",
    link: "#",
  },
];

export default function Project() {
  return (
    <section className="text-gray-600 body-font pt-10">
      <div className="text-center mb-6">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-lg sm:text-xl lg:text-5xl font-serif">
          My Projects
        </h1>
      </div>

      <div id="projects" className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-4 md:w-1/3 transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={project.image}
                  alt={project.alt}
                  width={500}
                  height={300}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Project: {project.id.toString().padStart(2, "0")}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed mb-3">{project.description}</p>
                  <div className="flex items-center flex-wrap">
                    <a
                      href={project.link}
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}