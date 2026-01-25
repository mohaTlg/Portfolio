export default function Skills() {
  const skillsData = [
    {
      category: "Langages de programmation",
      level: "Avancé",
      skills: ["Java", "Python", "C", "C++", "C#", "PHP", "JavaScript", "TypeScript", "Assembleur", "R"]
    },
    {
      category: "Développement Web & Mobile",
      level: "Avancé",
      skills: ["React.js", "Next.js", "Node.js", "Express", "Spring Boot", "Flutter", "Tailwind CSS", "HTML/CSS", "J2EE"]
    },
    {
      category: "Data & Bases de données",
      level: "Intermédiaire",
      skills: ["SQL", "NoSQL", "MySQL", "MongoDB", "Firebase", "Big Data"]
    },
    {
      category: "Outils & DevOps",
      level: "Intermédiaire",
      skills: ["Git", "GitHub", "GitLab", "CI/CD", "HPC", "Docker"]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
          Mes Compétences
        </h2>
        <p className="text-slate-600 text-center mb-16 max-w-2xl mx-auto">
          Voici l'ensemble de mes compétences techniques acquises lors de mes études et expériences
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900">
                  {skillGroup.category}
                </h3>
                <span className="text-xs font-semibold px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full">
                  {skillGroup.level}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm bg-white hover:bg-cyan-50 text-slate-700 hover:text-cyan-700 px-4 py-2 rounded-lg transition-all duration-300 cursor-default border border-slate-200 hover:border-cyan-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">📚 Langues</h3>
            <ul className="space-y-2">
              <li className="flex justify-between text-slate-700">
                <span>Français</span>
                <span className="text-cyan-600 font-semibold">Maternelle</span>
              </li>
              <li className="flex justify-between text-slate-700">
                <span>Anglais</span>
                <span className="text-cyan-600 font-semibold">Intermédiaire</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">🎓 Éducation</h3>
            <ul className="space-y-3 text-slate-700 text-sm">
              <li className="font-semibold text-cyan-600">Master 2 - Génie Logiciel</li>
              <p className="text-slate-600">ISIMA, Université Clermont Auvergne (2024-2026)</p>
              
              <li className="font-semibold text-cyan-600 mt-3">Licence Informatique</li>
              <p className="text-slate-600">ISIMA, Université Clermont Auvergne (2023-2024)</p>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
