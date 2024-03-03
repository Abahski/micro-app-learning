import React from "react";
import { IoClose } from "react-icons/io5";

type propTypes = {
  loginOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const ModalLogin: React.FC<propTypes> = ({ loginOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center mt-16 z-100 ${
        loginOpen ? "visible bg-black/50" : "invisible"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg shadow px-8 pt-6 pb-4 max-w mx-32 ${
          loginOpen ? "scale-100 opacity-100" : "scale-110 opacity-0"
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

export default ModalLogin;