export default function unlock() {
  return (
    <section className="w-full min-h-[25vh] py-[5vh] px-4 md:px-10 ">
      <div className="w-full min-h-[25vh] bg-[#811AFF] relative overflow-hidden rounded-md flex flex-col md:flex-row-reverse items-center">
        {/* Gambar Background Kanan */}
        <div className="w-full md:w-1/2 h-60 md:h-full flex justify-center items-end md:justify-end md:items-end">
          <img
            src="LogoAlatalat.png"
            alt="Logo Alat"
            className="object-contain max-h-full max-w-full z-0"
          />
        </div>

        <div className=" static md:absolute inset-0 z-10 w-[70%] min-h-[5vh] py-[5vh] flex items-center">
          <div className=" md:ml-[15%] w-full flex flex-col justify-center items-center md:items-start gap-6 max-w-3xl">
            <h1 className="text-white font-bold text-3xl md:text-5xl xl:text-[8vh] leading-tight text-center md:text-start">
              <span className="text-[#66EBFF]">Unlock real-time voice changing on </span>
              <span className="text-white">console</span>
            </h1>

            <p className="text-center md:text-start text-white text-sm md:text-base w-full md:w-[80%]">
              Pair Voicemod Key with your smartphone, and unlock voice changers and soundboards on your gaming console!
            </p>

            <button className="py-3 px-6 md:py-4 md:px-9 rounded-md bg-white text-sm md:text-base font-bold text-black shadow hover:scale-105 transition">
              Explore Voicelab 2.0
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
