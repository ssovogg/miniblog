import ReactDom from 'react-dom';

const Modal = ({ children }) => {
    const el = document.getElementById('modal');
    return ReactDom.createPortal(children, el);
  };

export default Modal;