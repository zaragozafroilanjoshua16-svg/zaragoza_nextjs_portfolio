export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center bg-slate-500/30 p-10 rounded-xl">
        <h2 className="text-3xl font-bold mb-6">Lets Build Something</h2>
        <p className="opacity-80 mb-8">
          If you are looking for someone who delivers reliable and efficient
          solutions, feel free to reach out.
        </p>

        <div className="flex flex-col gap-3 opacity-90">
          <p>Email: your-email@example.com</p>
          <p>GitHub: github.com/yourprofile</p>
          <p>LinkedIn: linkedin.com/in/yourprofile</p>
        </div>
      </div>
    </section>
  );
}
