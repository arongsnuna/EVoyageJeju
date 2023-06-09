function Modal({ isOpen, onClose, content }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <div>{content}</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default Modal;
