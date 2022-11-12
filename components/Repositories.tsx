import { useEffect, useState } from "react";
import constants from "../lib/constants";
import Link from "next/link";

export default function Repositories() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getRepositories = async () => {
    fetch("https://api.github.com/users/" + constants.githubId + "/repos")
      .then((response) => response.json())
      .then((data) => {
        setData(
          data
            .filter((d: Repositories) => d.fork === false)
            .sort((a: Repositories, b: Repositories) => {
              return b.stargazers_count - a.stargazers_count;
            })
            .slice(0, 9)
        );
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getRepositories();
  }, []);

  return (
    <div id="repo-component">
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 w-full gap-2 items-center mt-4">
          {[...Array(9)].map((e, i) => (
            <div key={i} className="h-full bg-zinc-900/90 hover:bg-zinc-200/20 relative transition-all duration-200 flex flex-col rounded-lg py-4 px-5">
              <i className="fal fa-arrow-up-right-from-square absolute top-4 right-5" />
              <div className="animate-pulse w-20 h-4 rounded-lg bg-zinc-800" />
              <div className="animate-pulse mt-4 w-60 h-4 rounded-lg bg-zinc-800" />
              <div className="animate-pulse mt-2 w-50 h-4 rounded-lg bg-zinc-800" />
              <div className="mt-3 flex justify-between">
                <div className="text-sm flex">
                  <i className="far fa-code text-center w-4 mr-1" />
                  <div className=" ml-2 animate-pulse w-10 h-4 rounded-lg bg-zinc-800" />
                </div>
                <div className="text-sm flex">
                  <i className="far fa-star text-center w-4 mr-1" />
                  <div className=" ml-2 animate-pulse w-10 h-4 rounded-lg bg-zinc-800" />
                </div>
                <div className="text-sm flex">
                  <i className="far fa-code-branch text-center w-4 mr-1" />
                  <div className=" ml-2 animate-pulse w-12 h-4 rounded-lg bg-zinc-800" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 w-full gap-2 items-center mt-4">
          {data.map((item: Repositories, index) => (
            <Link key={index} href={"https://github.com/Roxza/" + item.name} target="_blank" className="h-full bg-zinc-900/90 hover:bg-zinc-200/20 relative transition-all duration-200 flex flex-col rounded-lg py-4 px-5">
              <i className="fal fa-arrow-up-right-from-square absolute top-4 right-5" />
              <h1 className="leading-none text-lg text-zinc-100">
                <span className="text-primary text-xl font-medium">Roxza</span>/{item.name}
              </h1>
              <p className="line-clamp-2 mt-2 h-12">{item.description ? item.description : "Açıklama belirtilmedi."}</p>
              <div className="mt-3 flex justify-between">
                <div className="text-sm">
                  <i className="far fa-code text-center w-4 mr-1" />
                  {item.language ? " " + item.language : " Plain"}
                </div>
                <div className="text-sm">
                  <i className="fa fa-star text-center text-primary w-4 mr-1" />
                  {item.stargazers_count} star
                </div>
                <div className="text-sm">
                  <i className="far fa-code-branch text-center w-4 mr-1" />
                  {item.forks_count} fork
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

interface Repositories {
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
}
