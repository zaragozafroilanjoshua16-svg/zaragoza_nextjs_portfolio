import ProjectCard from "../projects/ProjectCard";


export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>


      <div className="grid md:grid-cols-2 gap-8">
        <ProjectCard
          title="Inventory Management System"
          description="A full-stack inventory and supplier management system."
          tech="React, SQL Server, Node.js"
        />


        <ProjectCard
          title="Student Enrollment System"
          description="Automated enrollment, subject management, and reporting."
          tech="Oracle, C#, SQL"
        />
      </div>
    </section>
  );
}