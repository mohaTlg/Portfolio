export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden" id="hero">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Modern Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-slate-200/60 shadow-sm mb-8 backdrop-blur-md">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-xs font-semibold text-slate-700 tracking-wide uppercase">Disponible pour de nouvelles opportunités</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 tracking-tight mb-6">
          Salut, je suis <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 animate-gradient-x">
            Mohamed Moussa
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-slate-600 font-medium mb-8">
          Software Engineer @ <span className="text-slate-900 font-semibold">Berger-Levrault & ISIMA</span>
        </h2>
        
        <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          Passionné par l'innovation logicielle. Spécialisé en 
          <span className="font-semibold text-cyan-600"> Developpement logiciel</span>, 
          <span className="font-semibold text-indigo-600"> DevOps</span> et 
          <span className="font-semibold text-blue-600"> Intelligence Artificielle</span>
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#projets" className="group relative px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_0_60px_-15px_rgba(0,0,0,0.5)] hover:-translate-y-1">
            Voir mes projets
            <span className="absolute inset-0 rounded-full border border-white/20 pointer-events-none"></span>
          </a>
          <a href="#contact" className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-full hover:bg-slate-50 transition-all duration-300 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1">
            Me contacter
          </a>
          <a href="https://www.linkedin.com/in/mohatlg/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-14 h-14 bg-white text-slate-700 rounded-full hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
