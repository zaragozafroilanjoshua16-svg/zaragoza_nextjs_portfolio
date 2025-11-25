/* eslint-disable @next/next/no-img-element */
export default function Hero() {
  return (
    <section id="hero" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 bg-gray-800 p-10 rounded-xl flex flex-col md:flex-row items-center gap-8">

        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="/profile.jpg" // Place your profile image in /public/profile.jpg
            alt="Froilan Joshua C. Zaragoza"
            className="w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-white/20 object-cover shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Froilan Joshua C. Zaragoza
          </h1>
          <p className="text-xl text-white opacity-80 mb-6">
            Cyber Security | IT Professional
          </p>
          <a
            href="#projects"
            className="bg-gray-400 text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
