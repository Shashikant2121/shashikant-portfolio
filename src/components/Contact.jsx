function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const subject = `Portfolio Contact from ${name}`;

    const body = `
Name: ${name}
Email: ${email}

Message:
${message}
    `;

    window.location.href = `mailto:shashikant90734@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-900"
    >
      {/* Background Glow */}

      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Let's Build Something{" "}
            <span className="text-blue-600">Great Together</span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Have a project, opportunity or just want to say hello? Feel free to
            reach out.
          </p>
        </div>

        {/* Contact Content */}

        <div className="mx-auto mt-14 grid max-w-6xl gap-10 lg:grid-cols-2">
          {/* ================= CONTACT INFO ================= */}

          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Let's work together
            </h3>

            <p className="mt-4 max-w-lg leading-7 text-slate-600 dark:text-slate-400">
              I'm currently looking for opportunities as a Frontend Developer or
              Full Stack Web Developer. If you have an interesting project or
              job opportunity, I'd love to hear from you.
            </p>

            {/* Email */}

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500 dark:bg-red-950/40">
                <i className="fa-solid fa-envelope text-lg" />
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Email
                </p>

                <a
                  href="mailto:shashikant90734@gmail.com"
                  className="text-sm text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  shashikant90734@gmail.com
                </a>
              </div>
            </div>

            {/* GitHub */}

            <div className="mt-5 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-white">
                <i className="fa-brands fa-github text-lg" />
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  GitHub
                </p>

                <a
                  href="https://github.com/Shashikant2121"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  github.com/Shashikant2121
                </a>
              </div>
            </div>

            {/* LinkedIn */}

            <div className="mt-5 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                <i className="fa-brands fa-linkedin-in text-lg" />
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  LinkedIn
                </p>

                <a
                  href="https://www.linkedin.com/in/shashi-kant-04279a25a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  linkedin.com/in/shashi-kant-04279a25a
                </a>
              </div>
            </div>

            {/* LeetCode */}

            <div className="mt-5 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500 dark:bg-orange-950/40">
                <i className="fa-solid fa-code text-lg" />
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  LeetCode
                </p>

                <a
                  href="https://leetcode.com/u/Shashikant21/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 transition hover:text-orange-500 dark:text-slate-400"
                >
                  leetcode.com/u/Shashikant21
                </a>
              </div>
            </div>

            {/* Social Icons */}

            <div className="mt-8 flex gap-3">
              <a
                href="https://github.com/Shashikant2121"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-1 hover:bg-slate-900 hover:text-white dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
              >
                <i className="fa-brands fa-github text-lg" />
              </a>

              <a
                href="https://www.linkedin.com/in/shashi-kant-04279a25a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-1 hover:bg-blue-600 hover:text-white dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
              >
                <i className="fa-brands fa-linkedin-in text-lg" />
              </a>

              <a
                href="https://leetcode.com/u/Shashikant21/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-1 hover:bg-orange-500 hover:text-white dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
              >
                <i className="fa-solid fa-code text-lg" />
              </a>
            </div>
          </div>

          {/* ================= CONTACT FORM ================= */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-950">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                />
              </div>

              {/* Email */}

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                />
              </div>

              {/* Message */}

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                />
              </div>

              {/* Submit */}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Send Message
                <i className="fa-solid fa-paper-plane text-sm" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
