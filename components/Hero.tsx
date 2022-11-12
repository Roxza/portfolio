import { useState, useEffect } from "react";
import Image from "next/image";
import constants from "../lib/constants";

export default function Hero() {
  const [data, setData] = useState({
    avatar: null,
    discriminator: null,
    status: "",
  });
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    fetch("https://api.lanyard.rest/v1/users/" + constants.discordId)
      .then((response) => response.json())
      .then((data) => {
        setData({ avatar: data.data.discord_user.avatar, discriminator: data.data.discord_user.discriminator, status: data.data.discord_status });
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div id="hero">
      {loading ? (
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-12 h-12 relative">
            <div className="rounded-full w-12 h-12 bg-zinc-800" />
            <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-[#000000]">
              <div className="w-full h-full relative">
                <div className="absolute top-0.5 left-0.5 animate-ping w-3 h-3 rounded-full bg-zinc-800" />
                <div className="absolute top-0.5 left-0.5 w-3 h-3 rounded-full bg-zinc-800" />
              </div>
            </div>
          </div>
          <div>
            <div className="w-20 h-3 bg-zinc-800 rounded-full text-zinc-700 text-lg leading-none hover:text-violet-600" />
            <div className="w-8 h-2 bg-zinc-800 rounded-full mt-1 text-zinc-500 text-xs leading-none" />
          </div>
        </div>
      ) : (
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-12 h-12 relative">
            <Image className="rounded-full bg-white/10" src={`https://cdn.discordapp.com/avatars/${constants.discordId}/${data.avatar}.png`} alt="avatar" width={500} height={500} />
            <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-[#000000]">
              <div className="w-full h-full relative">
                <div className={`absolute top-0.5 left-0.5 animate-ping w-3 h-3 rounded-full ${data.status}`} />
                <div className={`absolute top-0.5 left-0.5 w-3 h-3 rounded-full ${data.status}`} />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-zinc-200 transition-all duration-300 cursor-pointer text-lg leading-none hover:text-white">Roxza</h1>
            <h1 className="text-zinc-400 text-xs leading-none">#{data.discriminator}</h1>
          </div>
        </div>
      )}

      <h1 className="text-5xl font-semibold text-white">
        <span className="text-primary font-bold">Howdy,</span> I’m Roxza ✌️
      </h1>
      <p className="mt-4 text-md text-gray-200">Hello! my name is rox, I am a backend developer who lives in Turkey and speaks 3 languages, I am not very skilled at writing long articles about myself, you can contact me for more information about me.</p>
    </div>
  );
}
