import Hero from "components/Hero";
import Repositories from "components/Repositories";
import Skills from "components/Skills";

import { useEffect } from "react";
import Head from "next/head"
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div className="pt-32">
      <Head>
          <title>Home | Roxza Portfolio</title>
      </Head>
      <div data-aos="fade-up">
        <Hero />
      </div>
      <div id="repository" className="mt-28" data-aos="fade-left">
        <div id="title" className="relative">
          <h2 className="text-5xl ml-20 absolute pointer-events-none absolute left-24 -top-4 z-0 -translate-x-1/2 transform font-bold uppercase text-heading opacity-15 text-white opacity-20">Repositories</h2>
          <h2 className="text-3xl font-semibold text-white ml-[18px] -pt-4 ">Repositories</h2>
        </div>
        <div id="body">
          <Repositories />
        </div>
      </div>

      <div id="skills" className="mt-20" data-aos="fade-right">
        <div id="header" className="relative ml-[8px]">
          <h2 className="text-6xl absolute pointer-events-none absolute left-24 -top-4 z-0 -translate-x-1/2 transform font-bold uppercase text-heading opacity-15 text-white opacity-20">Skills</h2>
          <h2 className="text-3xl font-semibold text-white pt-2 ml-[18px]">Skills</h2>
        </div>
        <div id="body">
          <Skills />
        </div>
      </div>
    </div>
  );
}
