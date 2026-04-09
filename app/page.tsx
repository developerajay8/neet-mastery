import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Bundle from "./components/bundle";

import Testimonials from "./components/testimonials";
import WhyUs from "./components/whyus";
import Results from "./components/results";
import Pricing from "./components/pricing";
import FAQ from "./components/faq";
import BundleSection from "./components/bundlesection2";
import FinalCTA from "./components/finalcts";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <BundleSection/>
      <Bundle/>
      <WhyUs/>
      <Results/>
      <Testimonials/>
      <Pricing/>
      <FAQ/>
      <FinalCTA/>
      



     
    </div>
  );
}
