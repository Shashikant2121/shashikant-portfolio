import projects from "../data/project.js";

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-900"
    >
      {/* Background Decoration */}

      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ================= HEADING ================= */}

        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            My Work
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Featured <span className="text-blue-600">Projects</span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Some of the projects I've built while learning and working with
            modern web technologies.
          </p>
        </div>

        {/* ================= PROJECT GRID ================= */}

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-950 dark:hover:border-blue-900"
            >
              {/* Project Preview */}

              <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600">
                {/* Decorative circles */}

                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />

                <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-white/10" />

                {/* Icon */}

                <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md transition duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <i className={`${project.icon} text-4xl text-white`} />
                </div>

                {/* Project Number */}

                <span className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  #{String(project.id).padStart(2, "0")}
                </span>
              </div>

              {/* Project Content */}

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Buttons */}

                <div className="mt-6 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:border-slate-700 dark:text-slate-300 dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900"
                  >
                    <i className="fa-brands fa-github" />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ================= BOTTOM CTA ================= */}

        <div className="mt-14 text-center">
          <a
            href="https://github.com/Shashikant2121"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
          >
            <i className="fa-brands fa-github text-lg" />
            View More on GitHub
            <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
