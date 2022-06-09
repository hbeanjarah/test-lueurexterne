import React, { useRef, useState } from "react";
import Modal from "components/UI/Modal";
import VideoPlayer from "components/VideoPlayer";
import Button from "components/UI/Button";
import { MessagesType } from "types";

const Home = () => {
  const [open, setOpen] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [messages, setMessages] = useState<MessagesType>({
    bye: "",
    welcome: "",
  });

  const handleClickOK = () => {
    videoRef.current?.play();
    setOpen(false);
  };

  const handleContinue = () => {
    videoRef.current?.play();
  };

  return (
    <div className="text-2xl">
      <VideoPlayer videoRef={videoRef} />

      <div className="w-64 h-w-64 flex justify-center flex-col bg-transparent relative mr-auto ml-auto mt-[-150px]">
        <div className="w-full mb-5 text-center text-3xl font-bold text-white">
          Message
        </div>
        <Button textColor="white" onClick={handleContinue}>
          Continuer
        </Button>
      </div>

      <Modal
        open={open}
        setOpen={setOpen}
        messages={messages}
        setMessages={setMessages}
        handleClickOK={handleClickOK}
      />
    </div>
  );
};

export default Home;
