import Head from "next/head";
import FeaturesSection from "../src/components/FeaturesSection";
import HeroSection from "../src/components/HeroSection";
import NavBar from "../src/components/NavBar";
import SupportedBy from "../src/components/SupportedBy";
import TestimonialSection from "../src/components/TestimonialSection";
import WooSection from "../src/components/WooSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <NavBar />
        <HeroSection />
      </header>

      <main>
        <FeaturesSection />
        <WooSection />
        <TestimonialSection />
        <SupportedBy />
      </main>

      <div className="hero-bg">
        <img src="/images/W.svg" />
      </div>
    </div>
  );
}
