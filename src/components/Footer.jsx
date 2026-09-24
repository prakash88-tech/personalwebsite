import {
  FiGithub,
  FiLinkedin,
  FiHeart,
  FiArrowUp,
} from "react-icons/fi";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-10">
        
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          {/* Logo */}
          <div>
            <a
              href="#home"
              className="text-xl font-bold"
            >
              Prakash
              <span className="text-blue-500">
                .
              </span>
            </a>

            <p className="mt-2 text-sm text-slate-500">
              Building the web, one project at a time.
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-800 p-3 text-slate-400 transition hover:border-blue-500 hover:text-blue-400"
            >
              <FiGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-800 p-3 text-slate-400 transition hover:border-blue-500 hover:text-blue-400"
            >
              <FiLinkedin />
            </a>

            <a
              href="#home"
              className="rounded-lg bg-blue-600 p-3 text-white transition hover:bg-blue-500"
            >
              <FiArrowUp />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          <p className="flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Prakash Chalaune. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;