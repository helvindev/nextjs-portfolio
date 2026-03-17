const projects = [
  {
    title: "E-Commerce App",
    desc: "Fullstack ecommerce platform"
  },
  {
    title: "Task Management",
    desc: "Productivity web app"
  },
  {
    title: "AI SaaS Platform",
    desc: "AI powered tools"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-10 transition-colors duration-500">
      <h2 className="text-3xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-400">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}