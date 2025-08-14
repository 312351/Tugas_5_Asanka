export default function Section8(){
    return(
        <section className="w-full min-h-[35vh] px-12">
            <div className="w-full min-h-[35vh flex flex-col lg:flex-row-reverse justify-center items-center">
                <div className="w-full lg:w-[40vw] h-[25vh] flex flex-col justify-center items-center gap-y-5">
                    <h1 className="text-[#66EBFF] text-[8vh] font-bold text-center lg:text-start">Create or tweak any voice with Voicelab!</h1>
                    <p className=" text-center lg:text-start">Can’t find the voice you want? Make your own or tweak existing ones! Voicelab lets you mix effects from Reverb and Delay to wild ones like Robotifier.</p>
                <a href="#"
                    className="w-full text-center lg:text-start">
                <p className=" Button border-b-2 border-[#66EBFF] text-[#66EBFF] hover:text-black inline-block">Learn More about Voicelab</p>
                </a>
                </div>
                <div className="w-full lg:w-[50%] p-5 justify-center items-center flex">
                    <img src="https://www.voicemod.net/new/wp-content/uploads/2024/04/voicemod-custom-voices-1.png" alt="" />
                </div>
            </div>
        </section>
    );
}