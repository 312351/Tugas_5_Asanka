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

export default function Home() {
  return(
<div className="w-full min-h-1 bg-black">
  <Header/>
  <Section1/>
  <Section2/>
  <Section3/>
  <Section4/>
  <Section5/>
  <Section6/>
  <Section7/>
  <Section8/>
</div>
  );
  
}
