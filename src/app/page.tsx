
import EditorPic from "@/components/EditorPic";
import HeroSection from "../components/Hero-section";
import BestsellerProducts from "@/components/BestSelling-products";
import Hero1 from "@/components/Hero1";
import Hero2 from "@/components/Hero2";

export default function Home() {
  return (
   <div>
    <HeroSection/>
    <EditorPic/>
    <BestsellerProducts/>
    <Hero1/>
    <Hero2 />
  
   </div>
  );
}
