/* eslint-disable react/prop-types */

const Voiceover = ({ name, description, audioUrl, imageUrl }) => {
  const hoverStyle = {
    transition: 'transform 300ms ease-in-out',
    transform: 'scale(1)',
    zIndex: 1,  // Default z-index
  };

  return (
    <div className="b-red-500 flex flex-col gap-0 border-2 rounded-3xl p-3 relative">
      <div className="flex gap-2">
        <img
          src={imageUrl}
          className="rounded-3xl w-12"
          style={hoverStyle}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(3)';
            e.currentTarget.style.zIndex = 50; // Increase z-index on hover
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.zIndex = 1; // Reset z-index
          }}
        />
        <div className="flex flex-col justify-center">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <audio controls>
        <source src={audioUrl} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Voiceover;
