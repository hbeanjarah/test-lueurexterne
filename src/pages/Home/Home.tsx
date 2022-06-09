import React, { useRef, useState } from "react";
import Modal from "components/UI/Modal";
import VideoPlayer from "components/VideoPlayer";
import Button from "components/UI/Button";
import { MessagesType } from "types";

const Home = () => {
  const [open, setOpen] = useState(true);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState<boolean>(false);
  const [showByeMessage, setShowByeMessage] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [messages, setMessages] = useState<MessagesType>({
    bye: "",
    welcome: "",
  });

  const handleClickOK = () => {
    videoRef.current?.play();
    setOpen(false);
    setTimeout(() => {
      setShowWelcomeMessage(true);
      videoRef.current?.pause();
    }, 5000);
  };

  const handleContinue = () => {
    setShowWelcomeMessage(false);
    videoRef.current?.play();
    setTimeout(() => {
      setShowByeMessage(true);
      setShowWelcomeMessage(false);
    }, 5000);
  };

  const handleVideoEnd = () => {
    setMessages({
      bye: "",
      welcome: "",
    });
    setShowByeMessage(false);
    setShowWelcomeMessage(false);
    setOpen(true);
  };

  return (
    <div className="text-2xl">
      <VideoPlayer handleVideoEnd={handleVideoEnd} videoRef={videoRef} />

      <div className="w-64 h-w-64 flex justify-center flex-col bg-transparent absolute mr-auto ml-auto mt-[-150px] left-0 right-0">
        {showWelcomeMessage && (
          <>
            <div className="w-full mb-5 text-center text-3xl font-bold text-white">
              {messages.welcome}
            </div>
            <Button textColor="white" onClick={handleContinue}>
              Continuer
            </Button>
          </>
        )}
        {showByeMessage && (
          <div className="w-full mb-5 text-center text-3xl font-bold text-white">
            {messages.bye}
          </div>
        )}
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
