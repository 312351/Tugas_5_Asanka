export default function VoiceWork() {
  return (
    <section className="w-full min-h-[50vh] flex flex-col">
      <div className="w-full min-h-full py-5">
        {/* Title */}
        <div className="w-full h-[25vh] flex flex-col justify-center items-center text-center">
          <h1 className="text-[5vh] text-[#66EBFF] font-bold">
            How Discord Voicemod work?
          </h1>
          <p>Getting Started with Voice Mod is quick and easy:</p>
        </div>

        {/* Steps */}
        <div className="w-full min-h-[25vh] px-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="min-h-[25vh] px-4 flex flex-col md:flex-row  lg:flex-col items-center md:justify-center lg:justify-start text-center">
            <div className="w-[200px] h-[100px] md:h-[200px] flex justify-center items-center">
              <img
                src="https://www.voicemod.net/new/wp-content/uploads/2024/03/supercharge-your-mic.png"
                alt=""
                className="w-[15vh] h-[15vh] md:w-[25vh] lg:w-full lg:h-full object-contain"
              />
            </div>
            <div className="w-[50%] lg:w-full">
              <h1 className="text-[2vh] md:text-[4vh] font-bold md:text-start lg:text-center whitespace-nowrap">1. Supercharge your mic</h1>
              <p className=" text-[1.5vh] md:text-[3vh] md:text-start lg:text-center">
                Download. We install a ‘virtual microphone’—this supercharges your sound!
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="min-h-[25vh] px-4 flex flex-col md:flex-row  lg:flex-col items-center md:justify-center lg:justify-start text-center">
            <div className="w-[200px] h-[100px] md:h-[200px] flex justify-center items-center">
              <img
                src="https://www.voicemod.net/new/wp-content/uploads/2024/03/img-how-to-setup-3-1.png"
                alt=""
                className="w-[15vh] md:w-[25vh] lg:w-full lg:h-full object-contain"
              />
            </div>
            <div className="w-[50%] lg:w-full">
              <h1 className="text-[2vh] md:text-[4vh] font-bold md:text-start lg:text-center">2. Setup in Discord</h1>
              <p className="text-[1.5vh] md:text-[3vh] md:text-start lg:text-center">
                Choose Voicemod Virtual Microphone in your Discord input settings.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="min-h-[25vh] px-4 flex flex-col md:flex-row  lg:flex-col items-center md:justify-center lg:justify-start text-center">
            <div className="w-[200px] h-[100px] md:h-[200px] flex justify-center items-center">
              <img
                src="https://www.voicemod.net/new/wp-content/uploads/2024/03/setup-done.png"
                alt=""
                className="w-[15vh] md:w-[25vh] lg:w-full lg:h-full object-contain"
              />
            </div>
            <div className="w-[50%] lg:w-full">
              <h1 className="text-[2vh] md:text-[4vh] font-bold md:text-start lg:text-center">3. Blow minds</h1>
              <p className="text-[1.5vh] md:text-[3vh] md:text-start lg:text-center">
                Pick a voice, drop some memes and start boosting the way you sound.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
