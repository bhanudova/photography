import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import { SlideData } from "../../type/data";
import { Instragram } from "@/components/Instragram";
import Contact from "@/components/Contact";

export default function Home() {
  return (<>
  <Hero heading='Capture Photography' message="I Capture moments in nature and keem them alive."/>  
  <Slider slides={SlideData}/>
  <Instragram/>
  <Contact/>
  </>)
}
