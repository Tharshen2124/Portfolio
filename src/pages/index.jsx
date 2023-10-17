import Achievements from "@/components/organisms/Achievements";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Projects from "@/components/organisms/Projects";
import Navbar from "@/components/organisms/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Achievements />
      <Projects/>
      <Footer />
    </>
  );
}
