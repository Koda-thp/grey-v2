import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Studio } from "@/components/sections/Studio";
import { Work } from "@/components/sections/Work";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Services />
      <Work />
      <Studio />
      <Contact />
      <Footer />
    </main>
  );
}
