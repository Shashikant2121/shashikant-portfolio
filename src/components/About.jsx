function About() {
  return (
    <section
      id="about"
      className="relative bg-slate-50 py-24 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Turning Ideas Into{" "}
            <span className="text-blue-600">Digital Experiences</span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            A passionate developer who enjoys building clean, responsive and
            scalable web applications.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Who I Am
            </h3>

            <div className="mt-6 space-y-4 text-base leading-8 text-slate-600 dark:text-slate-400">
              <p>
                I'm{" "}
                <strong className="text-slate-900 dark:text-white">
                  Shashikant
                </strong>
                , a Full Stack Web Developer passionate about creating modern
                and user-friendly web applications.
              </p>

              <p>
                I have hands-on experience with modern technologies including
                JavaScript, React.js, Tailwind CSS, Node.js, Express.js and
                MongoDB.
              </p>

              <p>
                I enjoy working on real-world projects where I can solve
                problems, learn new technologies and create meaningful digital
                products.
              </p>
            </div>

            {/* Education Card */}
            <div className="mt-8 flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                <i className="fa-solid fa-graduation-cap text-lg" />
              </div>

              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Education
                </p>

                <h4 className="mt-1 font-bold text-slate-900 dark:text-white">
                  Bachelor of Computer Applications (BCA)
                </h4>

                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  SIET College • Mahatma Gandhi Kashi Vidyapeeth
                </p>
              </div>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-5">
            {/* Card 1 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                <i className="fa-solid fa-code text-lg" />
              </div>

              <h3 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                10+
              </h3>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Projects Built
              </p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400">
                <i className="fa-solid fa-laptop-code text-lg" />
              </div>

              <h3 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                MERN
              </h3>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Full Stack Development
              </p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400">
                <i className="fa-solid fa-mobile-screen-button text-lg" />
              </div>

              <h3 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                100%
              </h3>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Responsive Design
              </p>
            </div>

            {/* Card 4 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400">
                <i className="fa-solid fa-lightbulb text-lg" />
              </div>

              <h3 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                Problem
              </h3>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Solving Mindset
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
