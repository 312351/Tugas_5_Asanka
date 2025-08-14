import "@fortawesome/fontawesome-free/css/all.min.css";
export default function Header() { 
    return(
        <div>
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
</div>
    );
}