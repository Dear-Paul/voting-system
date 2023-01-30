import { ReactNode } from "react";

type ModalProps = {
    children?: ReactNode
    closeModal?: () => void
}
const Modal = ({children, closeModal}: ModalProps) => {
    return (
        <div className="overlay">
            <div className="modalContainer">
                <p onClick={closeModal}>Close</p>
                <div className="modalContent">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal;
