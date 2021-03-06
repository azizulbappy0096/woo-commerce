import Head from "next/head";
import FeaturesSection from "../src/components/FeaturesSection";
import Footer from "../src/components/Footer";
import HeroSection from "../src/components/HeroSection";
import NavBar from "../src/components/NavBar";
import SupportedBy from "../src/components/SupportedBy";
import TestimonialSection from "../src/components/TestimonialSection";
import WooSection from "../src/components/WooSection";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="This is a redign landing page of woo-commerce"
        />

        <meta name="keywords" content="woo-commerce, woo, azizul' dev" />
        <meta name="author" content="Azizul Bappy" />
        <title>woo-commerce</title>
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

      <footer>
        <Footer />
      </footer>

      <div className="hero-bg">
        <img src="/images/W.svg" />
      </div>
    </div>
  );
}
