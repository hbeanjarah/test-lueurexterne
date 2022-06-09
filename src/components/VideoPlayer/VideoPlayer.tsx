import React from "react";
import { MessagesType } from "types";
interface VideoProps {
  videoRef: React.MutableRefObject<HTMLVideoElement | null>;
  handleVideoEnd: () => void;
}
const VideoPlayer = ({ videoRef, handleVideoEnd }: VideoProps) => {
  return (
    <>
      <video
        src="https://setem.fr/wp-content/uploads/2022/05/1065464989-hd_4.mp4"
        ref={videoRef}
        className="brightness-100"
        onEnded={handleVideoEnd}
      />
    </>
  );
};

export default VideoPlayer;
