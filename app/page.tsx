import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Awards from "@/components/sections/Awards";
import Copyrights from "@/components/sections/Copyrights";
import Certifications from "@/components/sections/Certifications";
import Volunteer from "@/components/sections/Volunteer";
import Research from "@/components/sections/Research";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Awards />
      <Copyrights />
      <Certifications />
      <Volunteer />
      <Research />
      <Projects />
      <Contact />
    </>
  );
}