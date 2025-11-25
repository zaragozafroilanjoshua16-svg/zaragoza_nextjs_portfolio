'use client';

export default function RootHeader() {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white border-b border-black z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-x1 font-bold tracking-wide">PORTFOLIO</h1>
        <ul className="flex gap-6 text-sm opacity-90">
          <li><a href="#hero" className="hover:text-blue-400">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}