const skills = [
  {
    name: "HTML5",
    icon: "fa-brands fa-html5",
    color: "text-orange-500",
  },
  {
    name: "CSS3",
    icon: "fa-brands fa-css3-alt",
    color: "text-blue-500",
  },
  {
    name: "JavaScript",
    icon: "fa-brands fa-js",
    color: "text-yellow-500",
  },
  {
    name: "React.js",
    icon: "fa-brands fa-react",
    color: "text-cyan-500",
  },
  {
    name: "Tailwind CSS",
    icon: "fa-solid fa-wind",
    color: "text-cyan-500",
  },
  {
    name: "Node.js",
    icon: "fa-brands fa-node-js",
    color: "text-green-600",
  },
  {
    name: "Express.js",
    icon: "fa-solid fa-server",
    color: "text-slate-700 dark:text-white",
  },
  {
    name: "MongoDB",
    icon: "fa-solid fa-database",
    color: "text-green-500",
  },
  {
    name: "Git & GitHub",
    icon: "fa-brands fa-github",
    color: "text-slate-800 dark:text-white",
  },
  {
    name: "Postman",
    icon: "fa-solid fa-paper-plane",
    color: "text-orange-500",
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            My Skills
          </p>

          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Technologies I <span className="text-blue-600">Work With</span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Technologies and tools I use to build modern, scalable and
            responsive applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:bg-white hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-900 dark:hover:bg-slate-900"
            >
              <i
                className={`${skill.icon} ${skill.color} text-4xl transition duration-300 group-hover:scale-110`}
              />

              <h3 className="mt-4 text-sm font-semibold text-slate-800 dark:text-slate-200">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mx-auto mt-14 max-w-4xl rounded-2xl border border-blue-100 bg-blue-50 p-6 text-center dark:border-blue-950 dark:bg-blue-950/30">
          <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
            <span className="font-bold text-blue-600">My approach:</span> I
            focus on writing clean, maintainable code and building responsive
            interfaces that provide a great user experience.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
