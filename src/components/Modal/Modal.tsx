import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import * as React from "react";
import styles from "./styles";

type ModalProps = {
  children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ children }) => {
  const elementRef = useRef<HTMLDivElement>(document.createElement("div"));
  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    const current = elementRef.current;
    modalRoot!.appendChild(current);
    return () => void modalRoot!.removeChild(current);
  }, []);

  return createPortal(
    <div style={styles.modal}>{children}</div>,
    elementRef.current
  );
};

export default Modal;
