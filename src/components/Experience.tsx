'use client';

export default function Experience() {
  const parcours = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
          Mon Parcours
        </h2>
        <p className="text-slate-600 text-center mb-16 max-w-2xl mx-auto">
          Découvrez mon parcours professionnel et académique
        </p>

        <div className="text-md relative py-2 font-semibold">
          {/* Ligne verticale centrale */}
          <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 transform bg-gradient-to-b from-cyan-500 to-blue-600 sm:block"></div>

          {parcours.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const startDate = formatDate(item.startDate);
            const endDate = formatDate(item.endDate);
            const label = item.type === 'work' ? 'Expérience' : 'Formation';

            return (
              <div key={item.id} className="mt-6 sm:mt-0 sm:mb-12">
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
                          ? 'sm:w-1/2 sm:pr-16'
                          : 'sm:w-1/2 sm:pl-16'
                      }`}
                    >
                      <div className="relative border-l-4 border-cyan-500 bg-gradient-to-br from-slate-50 to-slate-100 p-8 shadow-lg rounded-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:border-l-cyan-400 backdrop-blur-sm border border-slate-200">
                        {/* Badge type */}
                        <div className="mb-3 inline-block">
                          <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                            item.type === 'work' 
                              ? 'bg-orange-100 text-orange-700' 
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {label}
                          </span>
                        </div>

                        {/* Icon & Title */}
                        <div className="flex items-start gap-3 mb-2">
                          <span className="text-4xl flex-shrink-0">{item.icon}</span>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-slate-900">
                              {item.type === 'work' ? item.position : item.title}
                            </h3>
                            <p className="text-cyan-600 font-semibold text-sm">
                              {item.type === 'work' ? item.company : item.institution} · {item.location}
                            </p>
                          </div>
                        </div>

                        {/* Dates */}
                        <p className="text-slate-500 text-xs mb-4 font-mono">
                          {startDate} → {endDate}
                        </p>

                        {/* Description */}
                        <ul className="space-y-2 mb-4">
                          {item.description.map((desc, i) => (
                            <li
                              key={i}
                              className="text-slate-700 flex items-start text-sm"
                            >
                              <span className="text-cyan-600 mr-2 flex-shrink-0">
                                ✓
                              </span>
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Skills si présent */}
                        {item.skills && (
                          <div className="flex flex-wrap gap-2">
                            {item.skills.map((skill) => (
                              <span
                                key={skill}
                                className="text-xs bg-cyan-100 hover:bg-cyan-200 text-cyan-700 px-3 py-1 rounded-full transition-colors"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot/indicator */}
                  <div className="absolute left-1/2 flex h-12 -translate-x-1/2 -translate-y-4 transform items-center justify-center space-x-3 border-4 border-white bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-2 rounded-full shadow-lg sm:translate-y-0">
                    <span className="text-white font-bold text-sm">
                      {idx + 1}
                    </span>
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
