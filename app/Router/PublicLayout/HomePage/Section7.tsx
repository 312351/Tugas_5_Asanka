export default function Section7(){
    return(
        <section className="w-full min-h-[35vh] px-12">
            <div className="w-full min-h-[35vh flex flex-col lg:flex-row justify-center items-center">
                <div className="w-full lg:w-[40vw] h-[25vh] flex flex-col justify-center items-center gap-y-5">
                    <h1 className="text-[#66EBFF] text-[8vh] font-bold text-center lg:text-start">Loot the Community for voices and sounds.</h1>
                    <p className=" text-center lg:text-start">If a sound meme or voice filter exists, we have it. Stay on top of trends, pick your favorites, and add them to your soundboards. No uploads, no fuss.</p>
                <a href="#"
                className="w-full text-center lg:text-start">
                <p className=" Button border-b-2 border-[#66EBFF] text-[#66EBFF] hover:text-black inline-block">Check it out!</p>
                </a>
                </div>
                <div className="w-full lg:w-[50%] p-5 justify-center items-center flex">
                    <img src="https://www.voicemod.net/new/wp-content/uploads/2024/02/community.png" alt="" />
                </div>
            </div>
        </section>
    );
}