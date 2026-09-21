function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}

          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-xl font-bold text-slate-900 dark:text-white"
            >
              Shashi
              <span className="text-blue-600">.</span>
            </a>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Full Stack Web Developer
            </p>
          </div>

          {/* Social Links */}

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Shashikant2121"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white"
            >
              <i className="fa-brands fa-github text-lg" />
            </a>

            <a
              href="https://www.linkedin.com/in/shashi-kant-04279a25a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition hover:bg-blue-50 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-blue-950/40 dark:hover:text-blue-400"
            >
              <i className="fa-brands fa-linkedin-in text-lg" />
            </a>

            <a
              href="https://leetcode.com/u/Shashikant21/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition hover:bg-orange-50 hover:text-orange-500 dark:text-slate-400 dark:hover:bg-orange-950/40"
            >
              <i className="fa-solid fa-code text-lg" />
            </a>
          </div>
        </div>

        {/* Divider */}

        <div className="my-8 h-px bg-slate-200 dark:bg-slate-800" />

        {/* Copyright */}

        <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-slate-500 md:flex-row">
          <p>© {currentYear} Shashikant. All rights reserved.</p>

          <p>
            Built with{" "}
            <span className="font-medium text-blue-600">
              React & Tailwind CSS
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
