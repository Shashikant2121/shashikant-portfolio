import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  // Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Active Section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: "-80px 0px -40% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/80">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}

        <a
          href="#home"
          className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          Shashi
          <span className="text-blue-600">.</span>
        </a>

        {/* Desktop Navigation */}

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const sectionName = item.href.substring(1);

            const isActive = activeSection === sectionName;

            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative py-2 text-sm font-medium transition ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                }`}
              >
                {item.name}

                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-600" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right Controls */}

        <div className="flex items-center gap-3">
          {/* Theme Button */}

          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
          >
            {darkMode ? (
              <i className="fa-solid fa-sun" />
            ) : (
              <i className="fa-solid fa-moon" />
            )}
          </button>

          {/* Let's Talk */}

          <a
            href="#contact"
            className="hidden rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 sm:block"
          >
            Let's Talk
          </a>

          {/* Mobile Menu */}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 md:hidden dark:border-slate-800 dark:text-slate-300"
          >
            <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden dark:border-slate-800 dark:bg-slate-950">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const sectionName = item.href.substring(1);

              const isActive = activeSection === sectionName;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400"
                      : "text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-900"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
