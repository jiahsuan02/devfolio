import "./App.css";
import Hero from "./components/layouts/hero";
import Experience from "./components/layouts/experience";
import Projects from "./components/layouts/projects";
import Skills from "./components/layouts/Skills";
import SectionTitle from "./components/prototypes/sectionTitle";

function App() {
  return (
    <div className="container">
      <div className="layout">
        <header className="left-side">
          <Hero />
        </header>

        <main className="right-side">
          <SectionTitle title="Experience" />
          <Experience />

          <SectionTitle title="Projects" />
          <Projects />

          <SectionTitle title="Technical Skills" />
          <Skills />
        </main>
      </div>
    </div>
  );
}

export default App;
