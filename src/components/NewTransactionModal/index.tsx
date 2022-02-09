import Modal from "react-modal";
import { Container, FecharModal, TransactionTypeContainer } from "./styles";
import closeImage from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

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
        <h2>Cadastrar transação</h2>

        <FecharModal
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={closeImage} alt="fechar modal" />
        </FecharModal>

        <input placeholder="Título" />
        <input type="number" placeholder="valor" />

        <TransactionTypeContainer>
          <button type="button">
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>
          <button type="button">
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
