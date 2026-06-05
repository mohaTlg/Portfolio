import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 relative selection:bg-cyan-200 selection:text-cyan-900 overflow-x-hidden">
      {/* Modern animated gradient background layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-200/40 blur-[120px] mix-blend-multiply" />
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-blue-200/40 blur-[100px] mix-blend-multiply" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-indigo-200/30 blur-[120px] mix-blend-multiply" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center">
        <Navbar />
        <main className="w-full">
          <Hero />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}
