import Modal from 'react-modal';

interface NewUserModalProps {
    isOpen: boolean;
    onRequestClone: () => void;
}

export function NewUserModal({ isOpen, onRequestClone }: NewUserModalProps) {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClone}>
            <h2>Cadastrar novo usuário</h2>

            <input
                placeholder="Nome"
                type="text" />

            <input
                placeholder="Cpf"
                type="text" />

            <button type="submit">
                Cadastrar
            </button>
        </Modal>
    )
}