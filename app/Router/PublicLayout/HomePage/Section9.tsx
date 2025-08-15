export default function Section9(){
    return(
        <section className="w-full min-h-[35vh] px-12">
            <div className="w-full min-h-[35vh flex flex-col lg:flex-row justify-center items-center">
                <div className="w-full lg:w-[40vw] h-[25vh] flex flex-col justify-center items-center gap-y-5">
                    <h1 className="text-[#66EBFF] text-[8vh] font-bold text-center lg:text-start">Record sound memes from any source.</h1>
                    <p className=" text-center lg:text-start">From YouTube to in-game—capture and add sound clips straight into your soundboards! Missed the moment? Instant Replay lets you rewind up to 30 seconds and relive the hype.</p>
                <a href="#"
                className="w-full text-center lg:text-start">
                <p className=" Button border-b-2 border-[#66EBFF] text-[#66EBFF] hover:text-black inline-block">Check Voicemod Recorder</p>
                </a>
                </div>
                <div className="w-full lg:w-[50%] p-5 justify-center items-center flex">
                    <img src="/GameFPS.png" alt="" />
                </div>

            </div>
        </section>
    );
} 