export default function Section5(){
    return(
        <section className="w-full min-h-[35vh] px-12">
            <div className="w-full min-h-[35vh flex flex-col lg:flex-row justify-center items-center">
                <div className="w-full lg:w-[40vw] h-[25vh] flex flex-col justify-center items-center gap-y-5">
                    <h1 className="text-[#66EBFF] text-[8vh] font-bold text-center lg:text-start">Change your voice. Become anyone.</h1>
                    <p className=" text-center lg:text-start">Gaming, streaming, or just vibing with friends? We got you. 200+ Voicemod voices—from AI anime waifus to Battlefield-style radios.</p>
                <a href="#"
                className="w-full text-center lg:text-start">
                <p className=" Button border-b-2 border-[#66EBFF] text-[#66EBFF] hover:text-black inline-block">Learcn more about Voice Changer</p>
                </a>
                </div>
                <div className="w-full lg:w-[50%] p-5 justify-center items-center flex">
                    <img src="https://www.voicemod.net/new/wp-content/uploads/2024/02/change-voice-real-time.png" alt="" />
                </div>
            </div>
        </section>
    );
}