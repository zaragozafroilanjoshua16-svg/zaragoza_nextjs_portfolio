export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 bg-slate-500/30 p-10 rounded-xl">
        <h2 className="text-3xl font-bold mb-10">Technical Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-slate-600/30 p-6 rounded-xl border border-black">
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="opacity-80">React, Next.js, Node.js, Tailwind</p>
          </div>

          <div className="bg-slate-600/30 p-6 rounded-xl border border-black">
            <h3 className="text-xl font-semibold mb-2">Databases</h3>
            <p className="opacity-80">SQL Server, MySQL, Oracle</p>
          </div>

          <div className="bg-slate-600/30 p-6 rounded-xl border border-black">
            <h3 className="text-xl font-semibold mb-2">Networking</h3>
            <p className="opacity-80">Cisco Routing & Switching, VLANs, Telnet</p>
          </div>

          <div className="bg-slate-600/30 p-6 rounded-xl border border-black">
            <h3 className="text-xl font-semibold mb-2">Tools</h3>
            <p className="opacity-80">Git, Postman, Docker</p>
          </div>

          <div className="bg-slate-600/30 p-6 rounded-xl border border-black">
            <h3 className="text-xl font-semibold mb-2">System Analysis</h3>
            <p className="opacity-80">Process Modeling, UML, Documentation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
