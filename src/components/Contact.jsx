import { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:prakashkumarchalaune10@gmail.com
      ?subject=${encodeURIComponent(formData.subject || "Portfolio Contact")}
      &body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

    window.location.href = mailtoLink.replace(/\s/g, "");
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold text-lg">
            Let's Connect
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Contact Me
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-5">
              Let's work together
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Have a project idea, internship opportunity, or just want
              to connect? Feel free to contact me. I am always open to
              discussing new projects, creative ideas, and opportunities.
            </p>

            {/* Email */}
            <div className="flex items-center gap-5 mb-6">
              <div
                className="w-12 h-12 flex items-center justify-center
                rounded-full bg-blue-100 text-blue-600 text-xl"
              >
                <FaEnvelope />
              </div>

              <div>
                <span className="block text-sm text-gray-500">
                  Email
                </span>

                <a
                  href="mailto:prakashkumarchalaune10@gmail.com"
                  className="text-gray-800 font-medium
                  hover:text-blue-600 transition"
                >
                  prakashkumarchalaune10@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-5 mb-8">
              <div
                className="w-12 h-12 flex items-center justify-center
                rounded-full bg-blue-100 text-blue-600 text-xl"
              >
                <FaMapMarkerAlt />
              </div>

              <div>
                <span className="block text-sm text-gray-500">
                  Location
                </span>

                <p className="text-gray-800 font-medium">
                  Salyan, Nepal
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-gray-700 font-semibold mb-4">
                Find me on
              </p>

              <div className="flex gap-4">

                {/* GitHub */}
                <a
                  href="https://github.com/prakash88-tech"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-12 h-12 flex items-center justify-center
                  rounded-full bg-gray-900 text-white text-xl
                  hover:bg-blue-600 transition duration-300"
                >
                  <FaGithub />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/prakash-chalaune-9b129031b/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-12 h-12 flex items-center justify-center
                  rounded-full bg-blue-600 text-white text-xl
                  hover:bg-blue-700 transition duration-300"
                >
                  <FaLinkedin />
                </a>

              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div
            className="bg-white p-8 rounded-2xl shadow-lg
            border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 border border-gray-300
                  rounded-lg outline-none focus:ring-2
                  focus:ring-blue-500 focus:border-blue-500
                  transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 border border-gray-300
                  rounded-lg outline-none focus:ring-2
                  focus:ring-blue-500 focus:border-blue-500
                  transition"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  className="w-full px-4 py-3 border border-gray-300
                  rounded-lg outline-none focus:ring-2
                  focus:ring-blue-500 focus:border-blue-500
                  transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Write your message..."
                  required
                  className="w-full px-4 py-3 border border-gray-300
                  rounded-lg outline-none resize-none
                  focus:ring-2 focus:ring-blue-500
                  focus:border-blue-500 transition"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center
                justify-center gap-2 bg-blue-600
                hover:bg-blue-700 text-white
                font-semibold px-6 py-3 rounded-lg
                transition duration-300 shadow-md
                hover:shadow-lg"
              >
                <FaPaperPlane />
                Send Message
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;