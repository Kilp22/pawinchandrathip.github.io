import VideoSection from "../components/VideoSection";
import PreviousWorksSection from "../components/PreviousWorksSection";

const PreviousProjects = () => {
    return (
        <>
      <div id="videos" className="w-full flex justify-center mt-[80px]"><VideoSection /></div>
      <div id="previousWorksSection"><PreviousWorksSection /></div>
        </>
    )
}

export default PreviousProjects;
