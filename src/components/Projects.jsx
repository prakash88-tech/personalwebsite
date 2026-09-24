import { FiGithub, FiExternalLink } from "react-icons/fi";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-slate-900 bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">
            My Work
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Featured{" "}
            <span className="text-blue-500">
              Projects
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-600" />

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Here are some of the projects I have built while
            learning and developing my skills.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2">

          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-900/10"
            >

              {/* Project Image / Preview */}
              <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-slate-950">

                <span className="text-7xl font-black text-white/10">
                  0{index + 1}
                </span>

                <div className="absolute inset-0 bg-blue-500/10 transition duration-300 group-hover:bg-blue-500/20" />

                {/* Decorative circles */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-white/10" />
                <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full border border-white/10" />
              </div>

              {/* Project Content */}
              <div className="p-7">

                <h3 className="text-2xl font-bold text-white transition group-hover:text-blue-400">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-7 flex flex-wrap gap-3">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-blue-500 hover:text-blue-400"
                  >
                    <FiGithub size={18} />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
                  >
                    <FiExternalLink size={18} />
                    Live Demo
                  </a>

                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;