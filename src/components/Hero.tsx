export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
          Salut, je suis 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600"> Mohamed</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-cyan-600 dark:text-cyan-400 font-semibold mb-6">
          Étudiant Master 2 Informatique - Génie Logiciel
        </h2>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
          Étudiant en Master 2 informatique, je recherche un stage de 5 à 6 mois en développement logiciel avec une perspective d'embauche
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#projets" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
            Voir mes projets
          </a>
          <a href="#contact" className="px-8 py-3 border-2 border-cyan-500 text-cyan-600 dark:text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300">
            Me contacter
          </a>
          <a href="https://www.linkedin.com/in/mohatlg/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-lg transition-all duration-300">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
