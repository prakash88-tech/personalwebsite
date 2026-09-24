import {
  FiUser,
  FiCode,
  FiDatabase,
  FiMonitor,
} from "react-icons/fi";

function About() {
  const cards = [
    {
      icon: <FiCode size={24} />,
      title: "Frontend Development",
      text: "Building responsive interfaces using React.js, JavaScript and Tailwind CSS.",
    },
    {
      icon: <FiDatabase size={24} />,
      title: "Backend & APIs",
      text: "Learning API integration, databases and full-stack application development.",
    },
    {
      icon: <FiMonitor size={24} />,
      title: "Responsive Design",
      text: "Creating clean and responsive websites for desktop, tablet and mobile.",
    },
  ];

  return (
    <section id="about" className="border-t border-slate-900 bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">
            About Me
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            A little about{" "}
            <span className="text-blue-500">me</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-600" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Text */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-blue-600/10 p-3 text-blue-400">
                <FiUser size={26} />
              </div>

              <h3 className="text-2xl font-bold">
                Who I Am
              </h3>
            </div>

            <p className="leading-8 text-slate-400">
              I'm Prakash Chalaune, a Bachelor of Engineering in
              Information Technology student passionate about web
              development and modern technologies.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              My main focus is frontend development with React.js.
              I enjoy creating clean interfaces, solving problems
              and turning ideas into functional web applications.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              I'm continuously improving my skills in JavaScript,
              React, APIs, databases and full-stack development.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                React.js
              </span>

              <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                JavaScript
              </span>

              <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                Tailwind CSS
              </span>

              <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                Git
              </span>
            </div>
          </div>

          {/* Cards */}
          <div className="grid gap-5">
            {cards.map((card) => (
              <div
                key={card.title}
                className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50"
              >
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400 transition group-hover:bg-blue-600 group-hover:text-white">
                    {card.icon}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold">
                      {card.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-400">
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;