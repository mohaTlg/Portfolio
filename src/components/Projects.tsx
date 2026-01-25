export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Cabinet Ibs",
      description: "Développement et maintenance d'applications web modernes pour l'entreprise Cabinet Ibs.",
      tags: ["Next.js", "React.js", "Firebase", "Tailwind CSS", "Sanity.io"],
      link: "https://cabinetibs.com/"
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-black" id="projets">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
          Projets
        </h2>
        <p className="text-slate-600 text-center mb-16 max-w-2xl mx-auto">
          Voici quelques projets sur lesquels j'ai travaillé. Cliquez pour en savoir plus.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="group bg-white rounded-lg p-6 hover:bg-slate-50 transition-all duration-300 hover:shadow-xl border border-slate-200 hover:border-cyan-500"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
