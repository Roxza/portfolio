import Link from "next/link";
import Image from "next/image";
import Projects from "lib/projects.json";

import { useEffect } from "react";
import Head from "next/head"
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProjectsPage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="projects" className="mt-20" data-aos="fade-right">
      <Head>
          <title>Projects | Roxza Portfolio</title>
      </Head>
      <div id="title" className="relative">
        <h2 className="text-5xl ml-9 absolute pointer-events-none absolute left-24 -top-4 z-0 -translate-x-1/2 transform font-bold uppercase text-heading opacity-15 text-white opacity-20">Projects</h2>
        <h2 className="text-3xl font-semibold text-white ml-[18px] -pt-4">Projects</h2>
      </div>
      <div id="body">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 w-full gap-2 items-center mt-4">
          {Projects.data.map((item, index) => (
            <Link key={index} href={item.url} target="_blank" className="cursor-pointer w-full bg-zinc-900/90 p-4 rounded-lg hover:bg-zinc-400/20 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-200">
              <Image src={item.bg} alt={item.name} width={500} height={500} className="h-32 w-full shadow-lg rounded-lg" />
              <div className="mt-4">
                <p className="font-semibold text-xl">{item.name}</p>
                <p className="text-sm max-h-24 overflow-auto font-normal h-24">{item.text}</p>
              </div>
              <p className="text-xs italic mt-6">
                <i className="fal fa-arrow-up-right-from-square mr-1" />
                {item.name === "Weather App" ? "www.mediafire.com" : item.url}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
