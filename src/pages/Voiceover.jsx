import ServicesSection from "../components/ServicesSection";
import VoiceoverShowcase from "../components/VoiceoverShowcase";

const Voiceover = () => {
    return(
        <>
      <div id="services" ><ServicesSection /></div>
      <div id="voiceovers" className="w-full flex justify-center mt-[80px]"><VoiceoverShowcase /></div>
      <VoiceoverShowcase isFemale={true} />
        </>
    )
}

export default Voiceover;