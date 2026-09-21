function Education() {
  return (
    <section id="education" className="bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            My Journey
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Education & <span className="text-blue-600">Experience</span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            My academic background and journey as a web developer.
          </p>
        </div>

        {/* Timeline */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative">
            {/* Vertical Line */}

            <div className="absolute left-5 top-0 h-full w-px bg-slate-200 md:left-1/2 md:-translate-x-1/2 dark:bg-slate-800" />

            {/* ================= EDUCATION ================= */}

            <div className="relative mb-14 md:flex md:justify-between">
              {/* Left */}
              <div className="ml-14 w-auto md:ml-0 md:w-[45%] md:text-right">
                <span className="text-sm font-semibold text-blue-600">
                  Bachelor's Degree
                </span>

                <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bachelor of Computer Applications
                </h3>

                <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                  BCA
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Completed my Bachelor's degree in Computer Applications with a
                  focus on computer science and software development.
                </p>
              </div>

              {/* Center Icon */}

              <div className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-white shadow-lg md:left-1/2 md:-translate-x-1/2 dark:border-slate-950">
                <i className="fa-solid fa-graduation-cap" />
              </div>

              {/* Right */}

              <div className="mt-4 ml-14 w-auto md:mt-0 md:ml-0 md:w-[45%]">
                <div className="inline-block rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600 dark:bg-slate-900 dark:text-slate-300">
                  SHEAT School of Business
                </div>

                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Mahatma Gandhi Kashi Vidyapeeth, Varanasi
                </p>
              </div>
            </div>

            {/* ================= FULL STACK ================= */}

            <div className="relative mb-14 md:flex md:flex-row-reverse md:justify-between">
              {/* Right Content */}

              <div className="ml-14 w-auto md:ml-0 md:w-[45%]">
                <span className="text-sm font-semibold text-purple-600">
                  Development Journey
                </span>

                <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                  Full Stack Web Development
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Built multiple real-world projects using the MERN stack,
                  working with React.js, Node.js, Express.js and MongoDB.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {["React.js", "Node.js", "Express.js", "MongoDB"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-purple-50 px-3 py-1 text-xs font-medium text-purple-600 dark:bg-purple-950/40 dark:text-purple-400"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Center Icon */}

              <div className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-purple-600 text-white shadow-lg md:left-1/2 md:-translate-x-1/2 dark:border-slate-950">
                <i className="fa-solid fa-code" />
              </div>

              {/* Date */}

              <div className="mt-4 ml-14 md:mt-0 md:ml-0 md:w-[45%] md:text-right">
                <span className="inline-block rounded-lg bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-600 dark:bg-purple-950/40 dark:text-purple-400">
                  Hands-on Learning
                </span>
              </div>
            </div>

            {/* ================= PROJECT EXPERIENCE ================= */}

            <div className="relative md:flex md:justify-between">
              {/* Left */}

              <div className="ml-14 w-auto md:ml-0 md:w-[45%] md:text-right">
                <span className="text-sm font-semibold text-green-600">
                  Practical Experience
                </span>

                <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                  Real-World Projects
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Developed responsive web applications and full-stack projects
                  while applying modern development practices.
                </p>
              </div>

              {/* Center Icon */}

              <div className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-green-600 text-white shadow-lg md:left-1/2 md:-translate-x-1/2 dark:border-slate-950">
                <i className="fa-solid fa-rocket" />
              </div>

              {/* Right */}

              <div className="mt-4 ml-14 md:mt-0 md:ml-0 md:w-[45%]">
                <div className="flex flex-wrap gap-2 md:justify-start">
                  {[
                    "Job Tracker",
                    "ChatApp",
                    "Deepseek AI",
                    "E-book Store",
                    "Background Remover",
                    "Weather Application",
                  ].map((project) => (
                    <span
                      key={project}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}

        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-blue-100 bg-blue-50 p-6 text-center dark:border-blue-950 dark:bg-blue-950/30">
          <i className="fa-solid fa-laptop-code text-2xl text-blue-600" />

          <p className="mt-3 font-medium text-slate-700 dark:text-slate-300">
            I'm continuously learning, building projects and improving my skills
            to become a better software developer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
