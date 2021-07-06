import { FormEvent, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface IClientForm {
    url: string
}

export function ClientForm({ url }: IClientForm) {
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');

    function handleCreateNewUser(event: FormEvent) {
        event.preventDefault();

        const data = { name, cpf }

        console.log(data);

        api.post(url, data);

        setName('');
        setCpf('');
    }

    return (
        <Container onSubmit={handleCreateNewUser}>
            <input type="text"
                value={name}
                onChange={event => setName(event.target.value)}
                placeholder="Nome" />

            <input type="text"
                value={cpf}
                onChange={event => setCpf(event.target.value)}
                placeholder="Cpf" />

            <button type="submit">
                Registrar
            </button>
        </Container>
    );
}