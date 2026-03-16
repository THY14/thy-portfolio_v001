import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import AboutMe from "@/components/AboutMe";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main>
        <Hero />
        <Quote />
        <Projects />
        <Skills />
        <AboutMe />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
