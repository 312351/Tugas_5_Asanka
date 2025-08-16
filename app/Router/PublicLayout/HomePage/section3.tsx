export default function Section3() {
  const images = [
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/discord.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/fortnite.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/image-131.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/image-131.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/image-124.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/Rectangle-40110.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/Rectangle-40122.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/image-127.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/Rectangle-40007.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/Rectangle-40125.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/05/world-of-warcraft.jpg",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/image-110.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/Rectangle-40016.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/image-126.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/Rectangle-40119.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/Rectangle-40118.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/05/2skype-logo.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/Left-4-Death-1-icon-e1719321486480.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/Rectangle-40121.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/Rectangle-40120.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/Rectangle-40117.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/Rectangle-40116.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/05/roblox-logo.jpeg",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/Rectangle-40114.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/Rectangle-40113.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/Rectangle-40111.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/Rectangle-40019.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/Rectangle-40014.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/Rectangle-40013.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/Rectangle-40008.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/image-139.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/image-138.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/image-137.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/image-136.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/image-135.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/image-127-1.png",
    "https://www.voicemod.net/new/wp-content/uploads/2024/03/Rectangle-40124.png"
  ];

  const hiddenIndexes = [2]; // index yang ingin disembunyikan
  const maxRows = 6; // jumlah baris maksimum
  const columns = 12; // jumlah kolom per row
  const maxItems = maxRows * columns; // total item maksimum

  return (
    <section className="w-full min-h-[100vh] px-6 flex flex-col">
      <div className="w-full flex flex-col">

        {/* Judul */}
        <div className="w-full flex flex-col justify-center items-center text-center">
          <h1 className="text-[4vh] lg:text-[8vh] font-bold text-[#66EBFF]">
            Works wherever you hang out online
          </h1>
          <p className="text-[2vh] text-lg text-gray-300">
            Not only in voice apps like Discord, but also in-game voice chats.
          </p>
        </div>

        <div className="w-full flex flex-col items-center relative">
          <img src="LogomicVoicemod.png" alt="Logo" className="w-[15vh]" />
          <img
            src="connect-vm-together 1.png"
            alt="Connection"
            className="w-[70vw]"
          />

          <div className="mt-[9vw] z-10 flex justify-center w-full items-center">
            <div className="w-full px-4 lg:px-16 overflow-auto">
              <div
                className="grid gap-3 justify-center"
                style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
              >
                {images
                  .filter((_, i) => !hiddenIndexes.includes(i))
                  .slice(0, maxItems)
                  .map((src, i) => (
                    <div
                      key={i}
                      className="w-full aspect-square rounded-md shadow-md flex items-center justify-center"
                    >
                      <img
                        src={src}
                        alt={`App ${i + 1}`}
                        className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain rounded-2xl"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
