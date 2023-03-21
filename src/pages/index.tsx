import Head from "next/head";
import LandingPage from "@/component/Home";
import HowWeWork from "@/component/HowWeWork";
import OurAgency from "@/component/OurAgency";
import Article from "@/component/Article";
import Contact from "@/component/Contact";
import ContactInfo from "@/component/ContactInfo";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import WhoWeAre from "@/component/WhoWeAre";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home - AFDV Marketing</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;600;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar/>
      <LandingPage />
      <HowWeWork/>
      <WhoWeAre/>
      <OurAgency/>
      <Article/>
      <Contact/>
      <ContactInfo/>
      <Footer/>
    </>
  );
}
