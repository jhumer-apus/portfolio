import About from "@/components/contents/About";
import Home from "@/components/contents/Home";
import ParticlesBackground from "@/components/animation/ParticlesBackground";
import Portfolio from "@/components/contents/Portfolio";
import Contact from "@/components/contents/Contact";

export default function Main() {
  return (
    <div className="relative h-screen overflow-auto">
      <ParticlesBackground />
      <main>
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}
