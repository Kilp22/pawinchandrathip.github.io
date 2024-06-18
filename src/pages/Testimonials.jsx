import { useRef } from "react";
import ClientsSection from "../components/ClientsSection";
import ContactSection from "../components/ContactSection";
import MyTestimonials from "../components/Testimonials";
// import Hero from "./components/Hero";
// import Previousworks from "./components/PreviousWorksSection";


const Testimonials = () => {
    const contactRef = useRef(null);
    return(
        <>
      <div id="mytestimonials" className="w-full flex justify-center mt-[80px]"><MyTestimonials /></div>
      <div id="clients"><ClientsSection /></div>
      <div id="contact" ref={contactRef}><ContactSection /></div>
        </>
    )
}


export default Testimonials;
