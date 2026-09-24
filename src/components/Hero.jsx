import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-blaclk/40 border-b border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left Side */}
          <div className="w-full md:w-1/2 text-center md:text-left">

            <p className="text-blue-600 text-lg font-semibold mb-3">
              Hello, I'm
            </p>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Prakash{" "}
              <span className="text-blue-600">
                Chalaune
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mt-4">
              BEIT Student & React Developer
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mt-6 max-w-xl">
              I am a passionate Information Technology engineering student
              interested in building modern, responsive and user-friendly
              web applications with React.js.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">

              <a
                href="#projects"
                className="flex items-center gap-2 bg-blue-600
                hover:bg-blue-700 text-white px-6 py-3 rounded-lg
                transition duration-300"
              >
                View My Work
                <FaArrowRight />
              </a>

              <a
                href="#contact"
                className="border-2 border-blue-600
                text-blue-600 hover:bg-blue-600
                hover:text-white px-6 py-3 rounded-lg
                transition duration-300"
              >
                Contact Me
              </a>

            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-5 mt-8">

              <a
                href="https://github.com/prakash88-tech"
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-gray-700
                hover:text-blue-600 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-gray-700
                hover:text-blue-600 transition"
              >
                <FaLinkedin />
              </a>

            </div>
          </div>

          {/* Right Side - Prakash Photo */}
          <div className="w-full md:w-1/2 flex justify-center">

            <div
              className="w-72 h-72 md:w-96 md:h-96
              rounded-full overflow-hidden
              border-8 border-blue-600
              shadow-2xl
              hover:scale-105
              transition duration-500"
            >
              <img
                src="/prakash.jpeg"
                alt="Prakash Chalaune"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;