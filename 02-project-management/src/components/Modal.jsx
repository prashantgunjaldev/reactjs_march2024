// createPortal
// useImperativeHandle

import { useRef } from "react";
import Button from "./Button";
import { forwardRef } from "react";
import { useImperativeHandle } from "react";
import { createPortal } from "react-dom";

// forwardRef
export default forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      show() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
      ref={dialog}
    >
      {children}
      <form className="mt-4 text-right" method="dialog">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});
