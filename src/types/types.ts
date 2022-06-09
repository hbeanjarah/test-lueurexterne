export type MessagesType = {
  welcome: string;
  bye: string;
};

export type ModalProps = {
  open: boolean;
  messages: MessagesType;
  showErrorMessage: boolean;
  handleClickOK: () => void;
  setShowErrorMessage: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setMessages: React.Dispatch<React.SetStateAction<MessagesType>>;
};
