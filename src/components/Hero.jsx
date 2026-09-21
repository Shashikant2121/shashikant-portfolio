function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white pt-20 dark:bg-slate-950"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 z-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 z-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8">
        {/* ================= LEFT ================= */}

        <div className="relative z-10 animate-[fadeUp_0.8s_ease-out]">
          {/* Small Introduction */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 dark:border-blue-900 dark:bg-blue-950/50">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />

            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Available for opportunities
            </span>
          </div>

          {/* Heading */}

          <p className="mb-3 text-lg font-medium text-slate-600 dark:text-slate-400">
            Hi, I'm
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white">
            Shashikant
            <span className="text-blue-600">.</span>
          </h1>

          {/* Developer Title */}

          <h2 className="mt-5 text-2xl font-semibold leading-tight text-slate-700 sm:text-3xl dark:text-slate-300">
            Full Stack <span className="text-blue-600">Web Developer</span>
          </h2>

          {/* Description */}

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400">
            I build modern, responsive and user-friendly web applications
            using JavaScript, React.js, Node.js, Express.js and MongoDB. I
            enjoy turning ideas into scalable digital experiences.
          </p>

          {/* Buttons */}

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              View My Work

              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            <a
              href="/resume.pdf.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:text-blue-400"
            >
              Download Resume

              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
                />
              </svg>
            </a>
          </div>

          {/* Social Links */}

          <div className="mt-8 flex items-center gap-3">
            {/* GitHub */}

            <a
              href="https://github.com/Shashikant2121"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-1 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900"
            >
              <i className="fa-brands fa-github text-xl" />
            </a>

            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/shashi-kant-04279a25a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
            >
              <i className="fa-brands fa-linkedin-in text-xl" />
            </a>

            {/* LeetCode */}

            <a
              href="https://leetcode.com/u/Shashikant21/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
            >
              <i className="fa-solid fa-code text-xl" />
            </a>
          </div>
        </div>

        {/* ================= RIGHT ================= */}

        <div className="relative z-10 flex justify-center lg:justify-end">
          {/* Decorative Circle */}

          <div className="absolute h-82.5 w-82-5 rounded-full bg-blue-500/10 blur-2xl sm:h-107.5 sm:w-107.5" />

          {/* Profile Image Container */}

          <div className="relative animate-[fadeUp_1s_ease-out]">
            <div className="absolute -inset-3 rounded-full bg-linear-to-r from-blue-600 via-cyan-400 to-purple-600 opacity-60 blur-md" />

            <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-white shadow-2xl sm:h-96 sm:w-96 dark:border-slate-800">
              <img
                src="/profile.png"
                alt="Shashikant - Full Stack Web Developer"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Tech Badge */}

            <div className="absolute -left-6 top-10 hidden rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-xl backdrop-blur sm:block dark:border-slate-700 dark:bg-slate-900/90">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Tech Stack
              </p>

              <p className="mt-1 font-semibold text-slate-800 dark:text-white">
                MERN Stack
              </p>
            </div>

            {/* Projects Badge */}

            <div className="absolute -bottom-5 -right-5 rounded-2xl border border-slate-200 bg-white/95 px-5 py-4 shadow-xl dark:border-slate-700 dark:bg-slate-900">
              <p className="text-2xl font-bold text-blue-600">10+</p>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Projects Built
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 transition hover:text-blue-600 md:flex"
      >
        <span className="text-xs font-medium">Scroll down</span>

        <span className="h-8 w-5 rounded-full border-2 border-current p-1">
          <span className="block h-1.5 w-1.5 animate-bounce rounded-full bg-current" />
        </span>
      </a>
    </section>
  );
}

export default Hero;

