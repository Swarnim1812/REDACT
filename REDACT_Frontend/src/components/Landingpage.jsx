import React from 'react'

import Benefits from "./Benefits";
import Collaboration from "./Collaboration";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Roadmap from "./Roadmap";
import Services from "./Services";

function LandingPage() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      
    </>
  )
}

export default LandingPage
