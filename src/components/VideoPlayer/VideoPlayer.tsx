import React from "react";
interface VideoProps {
  videoRef: React.MutableRefObject<HTMLVideoElement | null>;
}
const VideoPlayer = ({ videoRef }: VideoProps) => {
  return (
    <>
      <video
        src="https://setem.fr/wp-content/uploads/2022/05/1065464989-hd_4.mp4"
        ref={videoRef}
        className="brightness-100"
        onPlaying={(e) => {
          console.log("dsdsdsds", e.timeStamp);
        }}
      />
    </>
  );
};

export default VideoPlayer;
