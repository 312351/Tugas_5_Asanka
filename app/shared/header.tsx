import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Header() { 
  return (
    <header className="w-full h-[20vh] fixed z-50">
      <div className="w-full h-full px-[5vh] py-[3vh]">
        <div className="w-full h-full bg-[#090F0F] rounded-2xl flex lg:flex-row items-center p-3 justify-between">
          
          {/* Logo + Menu */}
          <div className="w-full flex flex-row gap-x-5 items-center">
            <a href="">
              <img src="/Logo.png" alt="Logo" className="w-[15vw]" />
            </a>
            <ul className="flex-row gap-x-4 text-[2vh] font-bold items-center hidden xl:flex">
              <a href=""><li className="hover:text-[#66EBFF]">Voice Changer</li></a>
              <a href=""><li className="hover:text-[#66EBFF]">Soundboard</li></a>
              <a href=""><li className="hover:text-[#66EBFF]">Voicemod Key</li></a>
              <a href="">
                <li className="hover:text-[#66EBFF]">
                  Creator Tools <i className="fas fa-chevron-right rotate-90"></i>
                </li>
              </a>
            </ul>
          </div>

          {/* Right Side Buttons */}
          <div className="flex flex-row gap-x-5 items-center text-[2vh] justify-end font-bold w-full">
            <button className="hidden md:block py-3 px-6 lg:px-[3vh] xl:px-[5vh] bg-gradient-5 rounded-2xl text-sm md:text-base lg:text-lg font-bold text-black">
              Download For Free
            </button>
            <div className="hidden xl:flex gap-x-5">
              <a href=""><h3 className="hover:text-[#66EBFF]">My Account</h3></a>
              <a href=""><h3 className="hover:text-[#66EBFF]">EN <i className="fas fa-chevron-right rotate-90"></i></h3></a>
            </div>

            {/* Mobile Menu Icon */}
            <div className="xl:hidden">
              <i className="fas fa-bars text-[3vh]"></i>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
