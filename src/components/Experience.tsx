'use client';

export default function Experience() {
  const parcours = [
    {
      id: 1,
      type: "work",
      company: "BERGER-LEVRAULT",
      position: "Stagiaire Ingénieur Logiciel",
      location: "Lyon, France",
      startDate: "2026-03-01",
      endDate: "2026-09-01",
      description: [
        "Analyse de logiciels polyglottes",
        "Automatisation de la génération de tests et de propriétés pour les métamodèles FAST générés à l’aide de Tree-Sitter"
      ],
      skills: ["Pharo", "Moose", "Tree-Sitter", "TypeScript", "Docker", "IA", "POO"],
      icon: "💻"
    },
    {
      id: 2,
      type: "education",
      institution: "ISIMA, Université Clermont Auvergne",
      title: "Master 2 - Génie Logiciel",
      location: "Clermont-Ferrand, France",
      startDate: "2024-09-01",
      endDate: "2026-09-01",
      description: [
        "Génie logiciel et architecture",
        "Intelligence Artificielle",
        "DevOps et Sécurité SI",
        "Développement Web et Mobile"
      ],
      icon: "🎓"
    },
    {
      id: 3,
      type: "work",
      company: "STMicroelectronics",
      position: "Stagiaire Ingénieur Logiciel",
      location: "Grenoble, France",
      startDate: "2025-01-01",
      endDate: "2025-05-01",
      description: [
        "Développement et tests d'extensions VSCode",
        "Contribution au développement back-end du compilateur LLVM RISC-V",
        "Amélioration des informations générées par un module de CyberSecurité"
      ],
      skills: ["TypeScript", "C/C++", "Python", "VSCode"],
      icon: "⚙️"
    },
    {
      id: 4,
      type: "education",
      institution: "ISIMA, Université Clermont Auvergne",
      title: "Licence Informatique",
      location: "Clermont-Ferrand, France",
      startDate: "2023-09-01",
      endDate: "2024-09-01",
      description: [
        "Algorithmique et Théorie des langages",
        "Architecture des ordinateurs",
        "Apprentissage Artificiel",
        "Fondamentaux informatiques"
      ],
      icon: "📚"
    },
    {
      id: 5,
      type: "work",
      company: "ALYSITES",
      position: "Développeur Full Stack",
      location: "Conakry, Guinée",
      startDate: "2022-09-01",
      endDate: "2023-12-01",
      description: [
        "Développement et maintenance d'applications web",
        "Analyse des besoins clients",
        "Analyse et conception UI/UX"
      ],
      skills: ["Next.js", "React.js", "Tailwind CSS", "Firebase"],
      icon: "🌐"
    },
    {
      id: 6,
      type: "education",
      institution: "Université Nongo Conakry (UNC)",
      title: "Maîtrise - Génie Informatique et Télécoms",
      location: "Conakry, Guinée",
      startDate: "2018-09-01",
      endDate: "2022-09-01",
      description: [
        "Développement mobile et web",
        "Administration BDD",
        "Réseaux et Sécurité informatique",
        "Télécommunications"
      ],
      icon: "🏫"
    },
    {
      id: 7,
      type: "work",
      company: "FACTORIELS",
      position: "Stagiaire Développeur Full Stack",
      location: "Conakry, Guinée",
      startDate: "2022-01-01",
      endDate: "2022-05-01",
      description: [
        "Réalisation d'une application d'immatriculation pour le parc automobile Guinéen",
        "Stack MERN complet"
      ],
      skills: ["React.js", "Node.js", "Express", "MongoDB"],
      icon: "📋"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative" id="parcours">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Mon Parcours
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Découvrez mon parcours professionnel et académique
          </p>
        </div>

        <div className="relative py-8">
          {/* Ligne verticale centrale fine et élégante */}
          <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 transform bg-gradient-to-b from-transparent via-cyan-300 to-transparent sm:block opacity-50"></div>

          {parcours.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const startDate = formatDate(item.startDate);
            const endDate = formatDate(item.endDate);
            const label = item.type === 'work' ? 'Expérience' : 'Formation';

            return (
              <div key={item.id} className="mt-8 sm:mt-0 sm:mb-16 relative group">
                <div className="flex flex-col items-center sm:flex-row">
                  {/* Contenu alternant gauche/droite */}
                  <div
                    className={`mx-auto flex w-full items-center ${
                      isEven ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <div
                      className={`w-full ${
                        isEven
                          ? 'sm:w-1/2 sm:pr-12'
                          : 'sm:w-1/2 sm:pl-12'
                      }`}
                    >
                      <div className="relative bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/80 hover:shadow-[0_8px_30px_rgb(6,182,212,0.1)] transition-all duration-500 hover:-translate-y-2 group-hover:bg-white/80">
                        {/* Badge type */}
                        <div className="mb-4 inline-block">
                          <span className={`text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider ${
                            item.type === 'work' 
                              ? 'bg-amber-100/80 text-amber-700 border border-amber-200' 
                              : 'bg-blue-100/80 text-blue-700 border border-blue-200'
                          }`}>
                            {label}
                          </span>
                        </div>

                        {/* Icon & Title */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm text-2xl flex-shrink-0">
                            {item.icon}
                          </div>
                          <div className="flex-1 pt-1">
                            <h3 className="text-xl font-extrabold text-slate-900 leading-tight mb-1">
                              {item.type === 'work' ? item.position : item.title}
                            </h3>
                            <p className="text-cyan-600 font-semibold text-sm">
                              {item.type === 'work' ? item.company : item.institution}
                            </p>
                            <p className="text-slate-400 text-xs mt-1 font-medium">
                              {item.location}
                            </p>
                          </div>
                        </div>

                        {/* Dates */}
                        <p className="text-slate-500 text-xs mb-5 font-mono bg-slate-100/50 inline-block px-3 py-1 rounded-full border border-slate-200/50">
                          {startDate} &mdash; {endDate}
                        </p>

                        {/* Description */}
                        <ul className="space-y-2.5">
                          {item.description.map((desc, i) => (
                            <li
                              key={i}
                              className="text-slate-600 flex items-start text-sm leading-relaxed"
                            >
                              <span className="text-cyan-500 mr-3 flex-shrink-0 mt-0.5">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </span>
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot/indicator */}
                  <div className="absolute left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-4 transform items-center justify-center rounded-full bg-white border-[3px] border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)] sm:translate-y-0 group-hover:scale-125 group-hover:border-blue-500 transition-all duration-300">
                    <div className="h-2 w-2 rounded-full bg-cyan-400 group-hover:bg-blue-500 transition-colors"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
