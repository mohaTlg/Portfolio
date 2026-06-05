export default function Skills() {
  const skillsData = [
    {
      category: "Langages de programmation",
      level: "Avancé",
      skills: ["Java", "Python", "C", "C++", "C#", "PHP", "JavaScript", "TypeScript", "Assembleur", "R"]
    },
    {
      category: "Développement Front-end",
      level: "Avancé",
      skills: ["Angular","React.js", "Next.js", "Tailwind CSS", "HTML/CSS", "Flutter"]
    },
    {
      category: "Développement Back-end",
      level: "Avancé",
      skills: ["Spring Boot", "Node.js", "Express", "J2EE"]
    },
    {
      category: "Data & Bases de données",
      level: "Avancé",
      skills: ["SQL", "NoSQL", "MySQL", "MongoDB", "Firebase", "Big Data"]
    },
    {
      category: "Outils & DevOps",
      level: "Intermédiaire",
      skills: ["Docker", "Git", "GitHub", "GitLab", "CI/CD", "HPC", "Linux", "Kubernetes", "Jenkins", "Ansible", "Terraform"]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative" id="skills">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Mes Compétences
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Les technologies et outils que j'utilise au quotidien
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {skillsData.map((category, idx) => {
            const isWide = idx === 0 || idx === 1;
            
            return (
              <div 
                key={category.category} 
                className={`group relative bg-white/60 backdrop-blur-xl rounded-[2rem] p-8 border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(6,182,212,0.12)] transition-all duration-500 hover:-translate-y-1 ${
                  isWide ? 'lg:col-span-2' : 'lg:col-span-1'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-cyan-600 transition-colors relative z-10">
                  {category.category}
                </h3>
                
                <div className="flex flex-wrap gap-3 relative z-10">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-slate-50/80 backdrop-blur-sm border border-slate-200/60 text-slate-700 rounded-2xl text-sm font-semibold hover:bg-cyan-50 hover:text-cyan-600 hover:border-cyan-200 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional information like Languages and Education in smaller bento blocks */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group relative bg-white/60 backdrop-blur-xl rounded-[2rem] p-8 border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(6,182,212,0.12)] transition-all duration-500 hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-cyan-600 transition-colors">
              Langues
            </h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center text-slate-700">
                <span className="font-medium">Français</span>
                <span className="text-xs font-bold px-3 py-1 bg-cyan-100/80 text-cyan-700 rounded-full">Maternelle</span>
              </li>
              <li className="flex justify-between items-center text-slate-700">
                <span className="font-medium">Anglais</span>
                <span className="text-xs font-bold px-3 py-1 bg-blue-100/80 text-blue-700 rounded-full">Intermédiaire</span>
              </li>
            </ul>
          </div>

          <div className="group relative bg-white/60 backdrop-blur-xl rounded-[2rem] p-8 border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(6,182,212,0.12)] transition-all duration-500 hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-cyan-600 transition-colors">
              Éducation
            </h3>
            <div className="space-y-5 text-slate-700">
              <div>
                <h4 className="font-bold text-cyan-600 text-lg">Master 2 - Génie Logiciel</h4>
                <p className="text-slate-500 text-sm font-medium">ISIMA, UCA (2024-2026)</p>
              </div>
              <div>
                <h4 className="font-bold text-cyan-600 text-lg">Licence Informatique</h4>
                <p className="text-slate-500 text-sm font-medium">ISIMA, UCA (2023-2024)</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
