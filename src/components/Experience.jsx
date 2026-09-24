import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiCheckCircle,
} from "react-icons/fi";

function Experience() {
  const experiences = [
    {
      type: "Internship",
      title: "React.js Frontend Development Intern",
      company: "Next Skills Academy",
      location: "Lalitpur, Nepal",
      period: "2026 - Present",
      description:
        "Working on frontend development using React.js, JavaScript, Tailwind CSS, reusable components, API integration, and responsive user interface development.",
      skills: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "REST API",
        "Git & GitHub",
      ],
    },
    {
      type: "Education",
      title: "Bachelor of Engineering in Information Technology",
      company: "Pokhara University",
      location: "Nepal",
      period: "2022 - Present",
      description:
        "Studying Information Technology Engineering with a focus on software development, web technologies, databases, information systems, and emerging technologies.",
      skills: [
        "Web Development",
        "Database",
        "Software Engineering",
        "Information Security",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-slate-800 bg-slate-900/40 py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
            My Journey
          </p>

          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Experience &{" "}
            <span className="text-blue-500">
              Education
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-600" />

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-400">
            My learning journey, professional experience and the
            technologies I have been working with.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-blue-600 via-blue-500/50 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-14">
            {experiences.map((experience, index) => (
              <div
                key={experience.title}
                className={`relative flex ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >

                {/* Timeline Icon */}
                <div className="absolute left-5 top-6 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-slate-900 bg-blue-600 text-white shadow-lg shadow-blue-600/30 md:left-1/2">
                  <FiBriefcase size={16} />
                </div>

                {/* Card */}
                <div className="ml-12 w-full md:ml-0 md:w-[44%]">

                  <div className="group rounded-2xl border border-slate-800 bg-slate-950/90 p-6 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-blue-900/10">

                    {/* Type + Date */}
                    <div className="flex flex-wrap items-center justify-between gap-3">

                      <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-400">
                        {experience.type}
                      </span>

                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <FiCalendar className="text-blue-500" />
                        {experience.period}
                      </div>

                    </div>

                    {/* Title */}
                    <h3 className="mt-5 text-xl font-bold leading-snug text-white transition group-hover:text-blue-400 sm:text-2xl">
                      {experience.title}
                    </h3>

                    {/* Company */}
                    <p className="mt-3 font-semibold text-blue-500">
                      {experience.company}
                    </p>

                    {/* Location */}
                    <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                      <FiMapPin className="text-blue-500" />
                      {experience.location}
                    </div>

                    {/* Description */}
                    <p className="mt-5 leading-7 text-slate-400">
                      {experience.description}
                    </p>

                    {/* Skills */}
                    <div className="mt-6">
                      <p className="mb-3 text-sm font-semibold text-slate-300">
                        Technologies / Areas
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <span
                            key={skill}
                            className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-slate-400 transition hover:border-blue-500/40 hover:text-blue-400"
                          >
                            <FiCheckCircle className="text-blue-500" />
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-500">
            Continuously learning, building and improving.
          </p>

          <a
            href="#contact"
            className="mt-5 inline-flex rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            Let's Connect
          </a>
        </div>

      </div>
    </section>
  );
}

export default Experience;