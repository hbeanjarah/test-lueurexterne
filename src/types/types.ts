export type MessagesType = {
  welcome: string;
  bye: string;
};

export type ModalProps = {
  open: boolean;
  messages: MessagesType;
  handleClickOK: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setMessages: React.Dispatch<React.SetStateAction<MessagesType>>;
};
