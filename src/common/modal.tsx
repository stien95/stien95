import React, { Dispatch, SetStateAction } from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.css";

type menuType =
  | Dispatch<SetStateAction<boolean>>
  | Dispatch<SetStateAction<string>>;
type valueType = React.SetStateAction<boolean> & React.SetStateAction<string>;
interface Props {
  children: React.ReactNode;
  setMenuToggle: menuType;
}
export default function Modal({ children, setMenuToggle }: Props) {
  return createPortal(
    <div
      className={styles.modalBg}
      onClick={(e) => {
        const value: valueType = (
          typeof e === "string" ? "" : () => false
        ) as valueType;
        setMenuToggle(value);
      }}
    >
      <button type="button" className={styles.close_modal_btn}>
        X
      </button>
      <div
        className={styles.modal_children}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
}
