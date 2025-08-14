import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";
export default function HomePage(){
    return(
        <div className="w-full min-h-[50vh] bg-black">
        <header className="w-full h-[25vh] fixed z-50 hidden">
        <div className="w-full h-full  px-[5vh] py-[3vh]">
        <div className="w-full h-full bg-[#090F0F] rounded-3xl flex lg:flex-row items-center p-3 justify-between">
            <div className="w-full flex flex-row gap-x-5 items-center">
            <a href=""> <img src="/Logo.png" alt="" className="w-[15vw] "/></a>
            <ul className="flex flex-row gap-x-4 text-[2vh] font-bold items-center">
                <li>Voice Changer</li>
                <li>Soundboard</li>
                <li>Voicemod Key</li>
                <li>Creator Tools <i className="fas fa-chevron-right rotate-90"></i></li>
            </ul>
        </div>
            <div className=" flex flex-row gap-x-5 items-center text-[2vh] justify-end font-bold w-full">
                <button className="py-4 px-[5vh] bg-gradient-5 rounded-2xl text-[2vh] font-bold text-black">Download For Free</button>
                <h3>My Account</h3>
                <h3>EN <i className="fas fa-chevron-right rotate-90"></i></h3>
            </div>
        </div>
        </div>
        </header>


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

            <section className="w-full min-h-[50vh] py-5 px-[25vh]">
                <div className="w-full h-full bg-[#811AFF] relative">
                    <div className="w-full h-full flex justify-end items-end">
                    <img src="LogoAlatalat.png" alt="" className=" z-0"/>
                    </div>
                    <div className="w-full h-full absolute z-10 inset-0 p-5">
                        
                        <div className=" w-[50%]">
                <p className="text-[5vh] font-bold">
                <span className="text-[#66EBFF]">Create your own voice with</span>{" "}
                <span className="text-white">Voicelab 2.0!</span>
                </p>                    
                <p>Boost the way you sound with your squad wherever you hang out, using the leading real-time AI voice changer & soundboard</p>
                <button className="py-4 px-9 rounded-md bg-white text-[2vh] font-bold text-black">    Explore Voicelab 2.0</button>
                </div>
                    </div>
                </div>
            </section>


            <section className="w-full min-h-[100vh] p-16 flex flex-col ">
                <div className="w-full flex flex-col gap-y-20">
                <div className="w-full h-10 flex flex-col  justify-center items-center">
                    <h1 className="text-[8vh] font-bold text-[#66EBFF]">Works whever you hang out online</h1>
                    <p>Not only in voice apps like Discord, but also in-game voice chats.</p>
                </div>
                <div className="w-full relative"> 
                    <div className="w-full min-h-[50vh] flex flex-col justify-start items-center z-0">
                    <img src="LogomicVoicemod.png" alt="" className="w-[15vh]"/>
                    <img src="connect-vm-together 1.png" alt=""className="w-[65vw]"/>
                    </div>
                    <div className=" absolute w-full h-full z-10 inset-0  flex justify-center items-end top-[5vh]">
                        <div className="w-[70vw] min-h-[25vh] flex justify-center overflow-y-auto">
                            <div className="grid grid-cols-12 w-full h-full gap-x-5 gap-y-3">
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                                <div className="w-[5vw] h-[5vw] bg-white"></div>
                             
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
            </section>


            <section className="w-full h-[45vh]">

            </section>
        </div>
    );
}