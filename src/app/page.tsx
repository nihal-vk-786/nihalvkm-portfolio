"use client";
import CustomCursor from "@/components/CustomCursor";
import Navbar       from "@/components/Navbar";
import Hero         from "@/components/Hero";
import MarqueeBand  from "@/components/MarqueeBand";
import About        from "@/components/About";
import Skills       from "@/components/Skills";
import Projects     from "@/components/Projects";
import Contact      from "@/components/Contact";
import Footer       from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <MarqueeBand />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
