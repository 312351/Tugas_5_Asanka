export default function Unlock() {
  return (
    <section className="w-full min-h-[50vh] py-5 px-4 md:px-10 xl:px-[25vh]">
      <div className="w-full min-h-[50vh] bg-[#811AFF] relative overflow-hidden rounded-md">
        {/* Gambar Background Kanan */}
        <div className="hidden md:flex w-full h-full justify-end items-end">
          <img
            src="LogoAlatalat.png"
            alt=""
            className="object-contain w-[50%] max-h-[90%] z-0"
          />
        </div>

        {/* Konten Teks */}
        <div className="absolute inset-0 z-10 p-5 flex items-center">
          <div className="w-full flex flex-col justify-center items-start gap-6 max-w-3xl">
            <h1 className="text-white font-bold text-3xl md:text-5xl xl:text-[8vh] leading-tight">
              <span className="text-[#66EBFF]">Create your own voice with</span>{" "}
              <span className="text-white">Voicelab 2.0!</span>
            </h1>

            <p className="text-white text-sm md:text-base w-full md:w-[80%]">
              Boost the way you sound with your squad wherever you hang out,
              using the leading real-time AI voice changer & soundboard
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
