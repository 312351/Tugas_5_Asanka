import Image from "next/image";
import Header from "./shared/header";
import Section1 from "./Router/PublicLayout/HomePage/Section1"
import Section2 from "./Router/PublicLayout/HomePage/section2";
import Section3 from "./Router/PublicLayout/HomePage/section3";
import Section4 from "./Router/PublicLayout/HomePage/Section4";
import Section5 from "./Router/PublicLayout/HomePage/Section5";
import Section6 from "./Router/PublicLayout/HomePage/Section6";
import Section7 from "./Router/PublicLayout/HomePage/Section7";
import Section8 from "./Router/PublicLayout/HomePage/Section8";
import Section9 from "./Router/PublicLayout/HomePage/Section9";
import Section_Panjang from "./Router/PublicLayout/HomePage/Component_section";
import Section_Pjg from "./Router/PublicLayout/HomePage/Section_Panjang";
import Unlock from "./Router/PublicLayout/HomePage/Unlock_realtime";
import WhyVOice from "./Router/PublicLayout/HomePage/Why";
import VoiceWork from "./Router/PublicLayout/HomePage/VoiceModWork";
import Footer from "./shared/Footer";
export default function Home() {
  return( 
<div className="w-full h-full pb-12 bg-black">
    <Header/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section_Pjg/>
    <Unlock/>
    <WhyVOice/>
    <VoiceWork/>
    <Footer/>
  </div>
  );
  
}
