import React from "react";
import Input from "components/UI/Input";
import Button from "../Button";
import { ModalProps } from "types";

const Modal = ({
  open,
  setOpen,
  setMessages,
  messages,
  handleClickOK,
}: ModalProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMessages((prev) => ({
      ...prev,
      [`${name}`]: value,
    }));
  };

  const enable = () => messages.bye !== "" && messages.welcome !== "";

  console.log("messages", messages);

  return open ? (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                Information utilisateur
              </h3>
              <Button
                onClick={() => setOpen(false)}
                customClasses="p-1 ml-20  border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              >
                <span className=" text-primary h-6 w-6 text-2xl block outline-none focus:outline-none">
                  x
                </span>
              </Button>
            </div>
            <div className="relative p-6 flex-auto">
              <Input
                type="text"
                id="welcome"
                name="welcome"
                placeholder="Entrez vos messages"
                required
                onChange={handleChange}
                labelName="Message de Bienvenu"
              />

              <Input
                type="text"
                id="bye"
                name="bye"
                required
                onChange={handleChange}
                placeholder="Entrez vos messages"
                labelName="Message d'adieu"
              />
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <Button
                transparent
                textColor="red"
                onClick={() => setOpen(false)}
              >
                Fermer
              </Button>
              <Button
                onClick={(e) => {
                  if (enable()) {
                    handleClickOK();
                  } else {
                    e.preventDefault();
                  }
                }}
                disabled={!enable()}
              >
                OK
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-20 fixed inset-0 z-40 bg-white"></div>{" "}
    </>
  ) : null;
};

export default Modal;
