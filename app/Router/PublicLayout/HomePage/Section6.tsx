export default function Section6(){
    return(
        <section className="w-full min-h-[35vh] px-12">
            <div className="w-full min-h-[35vh flex flex-col lg:flex-row-reverse justify-center items-center">
                <div className="w-full lg:w-[40vw] h-[25vh] flex flex-col justify-center items-center gap-y-5">
                    <h1 className="text-[#66EBFF] text-[8vh] font-bold text-center lg:text-start">Drop sound memes, dominate the chat.</h1>
                    <p className=" text-center lg:text-start">A sound is worth a thousand pictures. Add hilarious effects to your group chat and streams—find your sound and make others know about it.</p>
                <a href="#"
                    className="w-full text-center lg:text-start">
                <p className=" Button border-b-2 border-[#66EBFF] text-[#66EBFF] hover:text-black inline-block">Learn more about Soundboard</p>
                </a>
                </div>
                <div className="w-full lg:w-[50%] p-5 justify-center items-center flex">
                    <img src="https://www.voicemod.net/new/wp-content/uploads/2024/02/voicemod-soundboard.png" alt="" />
                </div>
            </div>
        </section>
    );
}