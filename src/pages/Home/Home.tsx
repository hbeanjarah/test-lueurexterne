import React, { useRef, useState } from "react";
import Modal from "components/UI/Modal";
import VideoPlayer from "components/VideoPlayer";
import Button from "components/UI/Button";
import { MessagesType } from "types";
import useUtils from "hooks/useHooks";

const Home = () => {
  const {
    open,
    messages,
    videoRef,
    setOpen,
    setMessages,
    handleClickOK,
    showByeMessage,
    showErrorMessage,
    handleContinue,
    handleVideoEnd,
    showWelcomeMessage,
    setShowErrorMessage,
  } = useUtils();

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
        showErrorMessage={showErrorMessage}
        setShowErrorMessage={setShowErrorMessage}
      />
    </div>
  );
};

export default Home;
