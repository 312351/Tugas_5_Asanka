export default function VoiceWork(){
    return(
        <section className="w-full min-h-[50vh] flex flex-col">
            <div className="w-full min-h-full py-5">
            <div className="w-full h-[25vh] flex flex-col justify-center items-center">
                <h1 className="text-[5vh] text-[#66EBFF] font-bold">How  Discord Voicemod work?</h1>
                <p>Getting Started with Voice Mod is quick and easy:</p>
            </div>
            <div className="w-full min-h-[50vh] px-12 grid grid-cols-3 gap-8">
           <div className="min-h-[50vh] px-4 flex flex-col items-center text-center gap-y-8">
          <div className="w-[20vw] h-[20vw] flex justify-center items-center">
            <img
                src="https://www.voicemod.net/new/wp-content/uploads/2024/03/supercharge-your-mic.png"
                alt=""
                className="h-full w-full object-contain"
                />
            </div>

            <h1 className="text-[4vh] font-bold mt-4">1. Supercharge your mic</h1>
             <p className="text-[3vh]">
             Download. We install a ‘virtual microphone’—this supercharges your sound!
            </p>
          </div>

  <div className="min-h-[50vh] px-4 flex flex-col items-center text-center gap-y-8">
    <div className="w-[20vw] h-[20vw] flex justify-center items-center">
      <img
        src="https://www.voicemod.net/new/wp-content/uploads/2024/03/img-how-to-setup-3-1.png"
        alt=""
        className="h-full w-full object-contain"
      />
    </div>
    <h1 className="text-[4vh] font-bold mt-4">2. Setup in Discord</h1>
    <p className="text-[3vh]">
      Choose Voicemod Virtual Microphone in your Discord input settings.
    </p>
  </div>

                <div className="min-h-[50vh] px-4 flex flex-col items-center text-center gap-y-8">
    <div className="w-[20vw] h-[20vw] flex justify-center items-center">
      <img
        src="https://www.voicemod.net/new/wp-content/uploads/2024/03/setup-done.png"
        alt=""
        className="h-full w-full object-contain"
      />
    </div>
    <h1 className="text-[4vh] font-bold mt-4">3. Blow minds</h1>
    <p className="text-[3vh]">
      Pick a voice, drop some memes and start boosting the way you sound.
    </p>
              </div>
            </div>
            </div>
        </section>
    );
}