export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Cabinet Ibs",
      description: "Développement et maintenance d'applications web modernes pour l'entreprise Cabinet Ibs.",
      tags: ["Next.js", "React.js", "Firebase", "Tailwind CSS", "Sanity.io"],
      link: "https://cabinetibs.com/"
    },
    {
      id: 2,
      title: "Gold Management App",
      description: "Développement et maintenance d'une application de gestion complete pour l'entreprise XXOR336.",
      tags: ["Next.js", "React.js", "Firebase", "Tailwind CSS", "Sanity.io"],
      link: "https://tlg-gold.vercel.app/"
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative" id="projets">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Projets Récents
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Quelques projets faits pour des clients (seulement ceux qui sont publics).
          </p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Suivez les liens pour voir les projets en détail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between bg-white/60 backdrop-blur-xl rounded-[2rem] p-8 border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(6,182,212,0.12)] transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full"
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors pr-8">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
