import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white dark:bg-black">
        <main className="pt-16">
        <section id="hero">
          <Hero />
        </section>
        <section id="parcours">
          <Experience />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projets">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      </div>
    </>
  );
}
