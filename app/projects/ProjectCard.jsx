export default function ProjectCard({ title, description, tech }) {
  return (
    <div className="bg-slate-500/30 p-6 rounded-xl border border-black hover:bg-white/10 transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="opacity-80 mb-4">{description}</p>
      <p className="text-black text-sm">Tech Used: {tech}</p>
    </div>
  );
}