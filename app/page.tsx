import Header from "./components/Header";
import Bio from "./components/Bio";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="max-w-[1400px] w-full mx-auto mb-10">
      <Header />
      <Bio />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
