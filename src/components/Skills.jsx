import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiAxios,
  SiMysql,
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      name: "React.js",
      icon: <FaReact />,
      level: "Advanced",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      level: "Intermediate",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      level: "Advanced",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      level: "Advanced",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      level: "Intermediate",
    },
    {
      name: "Axios",
      icon: <SiAxios />,
      level: "Intermediate",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      level: "Intermediate",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      level: "Intermediate",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      level: "Learning",
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      level: "Intermediate",
    },
  ];

  return (
    <section
      id="skills"
      className="border-t border-slate-900 bg-slate-900/40 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">
            My Skills
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Technologies I{" "}
            <span className="text-blue-500">use</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-600" />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:bg-slate-900"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-900 text-3xl text-blue-400 transition group-hover:bg-blue-600 group-hover:text-white">
                {skill.icon}
              </div>

              <h3 className="font-semibold">
                {skill.name}
              </h3>

              <p className="mt-2 text-xs text-slate-500">
                {skill.level}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;