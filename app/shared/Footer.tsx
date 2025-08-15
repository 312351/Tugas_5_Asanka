import { FaDiscord, FaRedditAlien, FaYoutube, FaTiktok, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Button1 from './Button/Button1';

export default function Footer() {
    return (
        <footer className="w-full bg-black">
            <div className="w-full bg-[#090F0F] py-8 flex flex-col items-center text-center gap-4">
                <h1 className="text-[4vh] font-extrabold text-[#66EBFF]">Follow Us More!</h1>
                <div className="flex justify-center items-center gap-6 flex-wrap">
                    <a href=""><FaTiktok className="text-[#DEDEDE] w-8 h-8" /></a>
                    <a href=""><FaYoutube className="text-[#DEDEDE] w-8 h-8" /></a>
                    <a href=""><FaDiscord className="text-[#DEDEDE] w-8 h-8" /></a>
                    <a href=""><FaRedditAlien className="text-[#DEDEDE] w-8 h-8" /></a>
                    <a href=""><FaInstagram className="text-[#DEDEDE] w-8 h-8" /></a>
                    <a href=""><FaLinkedin className="text-[#DEDEDE] w-8 h-8" /></a>
                </div>
            </div>

            <div className="w-full bg-black px-6 md:px-12 py-12">
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col md:flex-row justify-between gap-10">
                        <div className="flex  flex-row items-center justify-center md:flex-row gap-12">
                            <div className="flex justify-center md:justify-start">
                                <a href=""><img src="/Logo.png" alt="" className="w-[30vh] md:w-[40vh]" /></a>
                            </div>

                            <div className="text-[2.3vh] opacity-75 flex justify-center md:justify-start">
                                <div className="flex gap-12">
                                    <ul className="text-[#DEDEDE] flex flex-col gap-y-2 text-start">
                                        <li className="underline">Base</li>
                                        <li className="underline">Developers</li>
                                        <li className="underline">Newsroom</li>
                                        <li className="underline">Support</li>
                                        <li className="underline">Careers</li>
                                    </ul>
                                    <div className="text-[#DEDEDE] flex items-start">
                                        <p className="underline whitespace-nowrap">Voice filters for Discord</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center text-center gap-4">
                            <h1 className="text-[3vh] md:text-[4vh] lg:text-[5vh] font-bold whitespace-nowrap">Supercharge Your Voice</h1>
                            <Button1 Label="Download For Free" x="6" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-700 pt-6">
                        <div className="text-[1.8vh] text-[#aaa] flex flex-col md:flex-row gap-3 md:gap-6 text-center md:text-left">
                            <p>© 2025 Voicemod Inc., Sucursal en España</p>
                            <div className="flex flex-wrap gap-x-5 justify-center md:justify-start">
                                <a href="">Legal</a>
                                <a href="">Privacy</a>
                                <a href="">Terms of Use</a>
                                <a href="">Cookies Policy</a>
                                <a href="">3rd Party Software</a>
                            </div>
                        </div>
                        <div>
                            <img src="/image 10.png" alt="" className="h-10 object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
