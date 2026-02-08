import video from "./assets/videos/galaxy.mp4";
import "./BackgroundVideo.css";

const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="video-overlay"></div>
    </div>
  );
};

export default BackgroundVideo;
