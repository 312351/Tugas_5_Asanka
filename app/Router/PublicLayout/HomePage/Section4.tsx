'use client';
import { useState } from "react";

function YouTubeCard({ url }: { url: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoId = url.includes("shorts/")
    ? url.split("shorts/")[1].split("?")[0]
    : url.split("v=")[1]?.split("&")[0] || url;

  return (
    <div className="w-[90vw] max-w-[35vh] h-[50vh] bg-white rounded-xl overflow-hidden shadow-lg">
      <div className="relative aspect-video bg-black cursor-pointer h-full w-full">
        {!isPlaying ? (
          <>
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt="YouTube thumbnail"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition"
              onClick={() => setIsPlaying(true)}
            >
              <img
                src="./images__14_-removebg-preview.png"
                alt="Play"
                className="w-16 h-16"
              />
            </div>
          </>
        ) : (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default function Section4() {
  return (
    <section className="w-full min-h-[50vh] bg-gradient-2">
      <div className="w-full h-full px-4 py-10 flex flex-col justify-center items-center gap-y-16">
        <p className="text-[4vh] md:text-[5vh] font-bold text-center px-4">
          See what the Community is up to!
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 flex-wrap">
          <YouTubeCard url="https://www.youtube.com/watch?v=U2Ff1dJn3Bs" />
          <YouTubeCard url="https://www.youtube.com/watch?v=Sx6a5QjuODE" />
          <YouTubeCard url="https://www.youtube.com/watch?v=dg2BhS3ERfI" />
        </div>
      </div>
    </section>
  );
}
