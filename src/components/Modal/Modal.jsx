import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const modalRoot = document.querySelector('#modal-root');

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalWindow = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  /* flex-grow: 0; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 600px;
  width: 100%;
  padding: 12px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export function Modal({ children, onClose }) {
  const handleBackdropClick = e => {
    if (e.currentTarget !== e.target) {
      return;
    }
    onClose();
  };

  const handleKeyDown = useCallback(
    e => {
      if (e.code === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return createPortal(
    <BackDrop onClick={handleBackdropClick}>
      <ModalWindow>{children}</ModalWindow>
    </BackDrop>,
    modalRoot,
  );
}
