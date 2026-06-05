"use client";

import { useState, useRef } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleCustomSubmit = async () => {
    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const message = messageRef.current?.value || "";
    
    if (!name || !email || !message) {
      setErrorMessage("Veuillez remplir tous les champs.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("loading");
    
    try {
      const data = {
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
        name,
        email,
        message
      };
      
      const endpoint = ["https://", "api.web3", "forms.com", "/submit"].join("");
      
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Erreur lors de l'envoi.");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("Erreur réseau. Vérifiez votre connexion.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative" id="contact">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Parlons de votre projet
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Vous avez une idée ou une opportunité ? N'hésitez pas à me contacter.
          </p>
        </div>

        <div className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(6,182,212,0.12)] transition-shadow duration-500">
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12 flex-wrap">
            <a href="mailto:mamadoumoussa.diallo.9212@gmail.com" className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200/60 rounded-full text-slate-700 font-semibold hover:text-cyan-600 hover:border-cyan-200 hover:shadow-sm transition-all duration-300">
              <span className="text-xl">📧</span>
              mamadoumoussa.diallo.9212@gmail.com
            </a>
            <a href="tel:+33604495412" className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200/60 rounded-full text-slate-700 font-semibold hover:text-cyan-600 hover:border-cyan-200 hover:shadow-sm transition-all duration-300">
              <span className="text-xl">📱</span>
              +33 6 04 49 54 12
            </a>
          </div>
          
          {status === "success" ? (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/20">
                <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Message Envoyé !</h3>
              <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
                Merci de m'avoir contacté. Je vous répondrai dans les plus brefs délais.
              </p>
              <button 
                onClick={() => {
                  setStatus("idle");
                  if (nameRef.current) nameRef.current.value = "";
                  if (emailRef.current) emailRef.current.value = "";
                  if (messageRef.current) messageRef.current.value = "";
                }}
                className="px-8 py-3 bg-white border border-slate-200 text-slate-700 font-semibold rounded-full hover:bg-slate-50 transition-colors shadow-sm"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2 ml-2">Nom</label>
                  <input
                    ref={nameRef}
                    type="text"
                    placeholder="Votre nom"
                    className="w-full px-5 py-4 bg-white/80 border border-slate-200/80 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2 ml-2">Email</label>
                  <input
                    ref={emailRef}
                    type="email"
                    placeholder="votre@email.com"
                    className="w-full px-5 py-4 bg-white/80 border border-slate-200/80 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-300"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 ml-2">Message</label>
                <textarea
                  ref={messageRef}
                  placeholder="Comment puis-je vous aider ?"
                  rows={5}
                  className="w-full px-5 py-4 bg-white/80 border border-slate-200/80 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-300 resize-none"
                />
              </div>

              {status === "error" && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl text-center text-sm font-semibold border border-red-100">
                  {errorMessage}
                </div>
              )}
              
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleCustomSubmit}
                  disabled={status === "loading"}
                  className="w-full relative flex justify-center items-center px-8 py-4 bg-slate-900 text-white font-semibold rounded-2xl hover:bg-slate-800 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_0_60px_-15px_rgba(0,0,0,0.5)] hover:-translate-y-1"
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-3">
                      <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : (
                    "Envoyer le message"
                  )}
                </button>
              </div>
            </div>
          )}

        </div>
        
        <div className="mt-16 text-center">
          <p className="font-semibold text-slate-500 mb-6 uppercase tracking-wider text-sm">Suivez-moi sur les réseaux</p>
          <div className="flex justify-center gap-4 flex-wrap">
            {[
              { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mohatlg' },
              { name: 'GitHub', url: 'https://github.com/mohaTlg' },
              { name: 'YouTube', url: 'https://www.youtube.com/@mohaTlg' }
            ].map((social) => (
              <a 
                key={social.name}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-white border border-slate-200/60 rounded-full text-slate-600 font-semibold hover:text-cyan-600 hover:border-cyan-200 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
