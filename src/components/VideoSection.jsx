import data from "../data/index-data";

const VideoSection = () => {
  const videoUrls = data.videoUrls;
  return (
    <div>
      <h2>VideoSection</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {videoUrls.map((video) => (
          <div key={video.name} className="w-full md:max-w-[560px] mx-auto">
            <iframe
              className="w-full h-auto md:h-[315px]"
              src={video.videoUrl}
              title={video.name}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <h2>{video.name}</h2>
            <p>{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
