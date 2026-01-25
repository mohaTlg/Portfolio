export default function Contact() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-black" id="contact">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
          Parlons ensemble
        </h2>
        <p className="text-slate-600 text-center mb-8">
          Vous avez un projet en tête ? N'hésitez pas à me contacter.
        </p>
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <a href="mailto:mamadoumoussa.diallo.9212@gmail.com" className="text-cyan-600 hover:text-cyan-700 font-semibold">
            📧 mamadoumoussa.diallo.9212@gmail.com
          </a>
          <span className="text-slate-400">•</span>
          <a href="tel:+33604495412" className="text-cyan-600 hover:text-cyan-700 font-semibold">
            📱 +33 6 04 49 54 12
          </a>
        </div>
        
        <form className="space-y-6">
          <div>
            <label className="block text-slate-900 font-semibold mb-2">Nom</label>
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors"
            />
          </div>
          
          <div>
            <label className="block text-slate-900 font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="votre.email@example.com"
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors"
            />
          </div>
          
          <div>
            <label className="block text-slate-900 font-semibold mb-2">Message</label>
            <textarea
              placeholder="Votre message..."
              rows={5}
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors resize-none"
            />
          </div>
          
          <button
            type="submit"
            className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            Envoyer
          </button>
        </form>
        
        <div className="mt-16 pt-8 border-t border-slate-300 text-center text-slate-600">
          <p className="font-semibold mb-4">Suivez-moi sur les réseaux sociaux</p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a href="https://www.youtube.com/@mohaTlg" className="text-cyan-600 hover:text-cyan-700 font-semibold transition-colors">YouTube</a>
            <a href="https://github.com/mohaTlg" className="text-cyan-600 hover:text-cyan-700 font-semibold transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/mohatlg" className="text-cyan-600 hover:text-cyan-700 font-semibold transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
