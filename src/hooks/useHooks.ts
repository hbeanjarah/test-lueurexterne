import { useRef, useState } from "react";
import { MessagesType } from "types";

const useHooks = () => {
  const [open, setOpen] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
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

  return {
    open,
    setOpen,
    videoRef,
    messages,
    setMessages,
    handleClickOK,
    handleVideoEnd,
    handleContinue,
    showByeMessage,
    showErrorMessage,
    setShowByeMessage,
    showWelcomeMessage,
    setShowErrorMessage,
  };
};

export default useHooks;
