export default function Section1(){
    return(
                    <section className="w-full min-h-[100vh] bg-gradient-to-r from-[#7E20FF] to-[#4683FA] relative">
                <img src="https://www.voicemod.net/new/wp-content/uploads/2024/04/voicemod-hero-1-e1713355614461-1.png" alt="" className="object-cover z-0" />
                <div className=" absolute bg-gradient-to-b from-[#fff0] via-[#fff0] to to-black z-10 inset-0"></div>
                <div className=" flex flex-col items-end justify-center tex absolute z-20 inset-0" >
                    <span className="w-[45%] mr-[25vh] flex flex-col gap-y-[15vh]">
                        <div className="w-full flex flex-col text-center">
                    <h1 className="font-bold text-[#66EBFF] text-[8vh]">REAL TIME VOICE CHANGER & SOUNDBOARD</h1>
                    <p>Boost the way you sound with your squad wherever you hang out, using the leading real-time AI voice changer & soundboard</p>
                    </div>
                    <div className="w-full flex justify-start pl-5">
                        <div className="min-w-1 flex flex-col items-center justify-center">
                         <button className="py-4 px-[9vh] bg-gradient-5 rounded-2xl text-[2vh] font-bold text-black">Download For Free</button>
                         <p className="text-[2vh]">For Windows 10/11 & macOS</p>
                         </div>
                    </div>
                    </span>
                </div>
                    <div className="w-full h-full absolute z-10 inset-0 flex flex-col justify-end items-center gap-y-5 pb-5">
                        <div className="flex flex-col"></div>
                        <h1 className="font-bold text-[3vh] text-[#66EBFF]">Our Partners</h1>
                        <div className=" flex w-[100vh] gap-x-5">
                            <a href=""><img src="https://www.voicemod.net/new/wp-content/uploads/2024/03/corsair.png" alt="" className=""/></a>
                            <a href=""><img src="https://www.voicemod.net/new/wp-content/uploads/2024/03/msi.png" alt="" /></a>
                            <a href=""><img src="https://www.voicemod.net/new/wp-content/uploads/2024/07/elgato.png" alt="" /></a>
                            <a href=""><img src="https://www.voicemod.net/new/wp-content/uploads/2024/07/nvidia.png" alt="" /></a>
                            <a href=""><img src="https://www.voicemod.net/new/wp-content/uploads/2025/03/omengaminghub.png" alt="" /></a>
                            <a href=""><img src="https://www.voicemod.net/new/wp-content/uploads/2025/03/omengaminghub.png" alt="" /></a>
                        </div>
                    </div>
            </section>
            
    );
}