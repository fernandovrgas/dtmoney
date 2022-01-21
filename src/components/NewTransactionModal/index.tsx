import Modal from "react-modal";
import { Container, Button } from "./styles";
import closeImage from "../../assets/close.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root");

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <Container>
        <Button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={closeImage} alt="fechar modal" />
        </Button>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título" />
        <input type="number" placeholder="valor" />
        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
