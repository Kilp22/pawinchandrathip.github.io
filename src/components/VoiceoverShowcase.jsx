import PropTypes from 'prop-types';
import Voiceover from './Voiceover';
import data from '../data/index-data';

const VoiceoverShowcase = ({ isFemale }) => {
  const voiceovers = isFemale ? data.femalevoiceovers : data.malevoiceovers;
  const heading = isFemale ? "Female Voiceover Showcase" : "Male Voiceover Showcase";
  return (
    <div className='mt-20 flex flex-col justify-center items-center gap-20'>
        <h2 className='text-3xl md:text-[60px] pb-5 font-bold'>{heading}</h2>
      <div className='flex flex-col items-center grid-cols-3 justify-items-center sm:grid gap-2'>
        {voiceovers.map((voiceover, index) => (
          <Voiceover key={index} {...voiceover} />
        ))}
      </div>
      {/* <button className='bg-gray-500 text-white hover:text-red-200 rounded-xl w-[15%] self-center mt-5'>... ... ...</button> */}
    </div>
  );
};

VoiceoverShowcase.propTypes = {
  isFemale: PropTypes.bool
};

export default VoiceoverShowcase;
