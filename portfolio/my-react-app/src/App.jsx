import Hero from "./components/hero";
import About from "./components/about";
import Project from "./components/project";
import Skill from "./components/skills";
import Contact from "./components/contact";


const App = () => {
  return (
    <div className=" font-poppins bg-[#0d0723]">
      <Hero />
      <About />
      <Skill/>
      <Project />
      <Contact />
    </div>
  );
};
export default App;
