import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children }) => {
  const elemRef = useRef(null);
  if (!elemRef.current) {
    const div = document.createElement('div');
    elemRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal');
    modalRoot.appendChild(elemRef.current);

    /* When you return in a function in useEffect, It occurs when the
     component unmount - more like the componentDidUnmount
    */
    return () => modalRoot.removeChild(elemRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elemRef.current);
};

export default Modal;
