import React, { PropsWithChildren } from "react";
import "./style.scss";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose, children }: PropsWithChildren<Props>) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
