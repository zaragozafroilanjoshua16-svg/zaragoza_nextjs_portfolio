import ProjectCard from "./ProjectCard";


export default function ProjectsPage() {
  return (
    <section>
      <h2>All Projects</h2>
      <ProjectCard title="Project A" description="Project A details" />
      <ProjectCard title="Project B" description="Project B details" />
    </section>
  );
}