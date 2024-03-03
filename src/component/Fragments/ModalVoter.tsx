import React from "react";
import { IoClose } from "react-icons/io5";

type propTypes = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const ModalVote: React.FC<propTypes> = ({ open, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center mt-16 transition-colors z-100 ${
        open ? "visible bg-black/50" : "invisible"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg shadow px-6 pt-4 pb-6 transition-all max-w mx-32 ${
          open ? "scale-100 opacity-100" : "scale-110 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 py-1 px-2 rounded-md text-white bg-red-400 hover:bg-red-500 transition-all"
          onClick={onClose}
        >
          <IoClose className="w-6 h-6" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalVote;