import React from "react";

import Header from "./components/_header/Header";
import Hero from '@/app/components/_hero/Hero';
import Works from "./components/_works/Works";
import Collab from "./components/_collab/Collab";
import Process from "./components/_process/Process";
import Footer from "./components/_footer/Footer";

export default function Home() {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <Hero />
        <Works />
        <Collab />
        <Process />
      </main>
      <Footer />
    </div>
  )
}
