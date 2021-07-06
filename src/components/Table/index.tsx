import { useEffect, useState } from "react";
// import * as JsSearch from 'js-search';
import { Search } from "js-search"

import { ClientForm } from "../ClientForm";
import { api } from "../../services/api"

import { BudgetForm } from "../BudgetForm";
import { Search as InputSearch } from "../Search";

import { Container } from "./styles";


interface ITableProps {
    url: string;
}


export function Table({ url }: ITableProps) {
    const [data, setData] = useState([]);
    const [showNewUser, setShowNewUser] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const search = new Search(['id', 'name', 'cpf']);


    async function deleteItem(id: string): Promise<void> {
        await api.delete(`${url}/${id}`);

        const response = await api.get(url)

        setData(response.data);
    }

    useEffect(() => {
        async function fetchData() {
            const response = await api.get(url);
            setData(response.data);
            search.addDocuments(response.data)
            console.log(response.data);
            console.log(search.search("Pedro"))
        };
        fetchData();
    }, [url]);

    return (
        <Container>
            <>
                {(() => {
                    switch (url) {
                        case 'budgets':
                            return (
                                <>
                                    <button onClick={() => { setShowNewUser(!showNewUser) }}>
                                        Novo
                                    </button>

                                    <input type="text" placeholder="Pesquisar..." />

                                    {showNewUser && <BudgetForm url={url} />}
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Descrição</th>
                                                <th>Valor</th>
                                                <th>Data de Registro</th>
                                                <th>Atualizar</th>
                                                <th>Deletar</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((item: any) => {
                                                return (
                                                    <tr key={item.id}>
                                                        <td>{item.description}</td>
                                                        <td>{item.value}</td>
                                                        <td>{item.created_at}</td>
                                                        <td>
                                                            <button>
                                                                atualizar
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button onClick={() => { deleteItem(item.id) }}>
                                                                deletar
                                                            </button>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </>
                            )
                        default:
                            return (
                                <>
                                    <button onClick={() => { setShowNewUser(!showNewUser) }}>
                                        Novo
                                    </button>

                                    <div>
                                        <InputSearch
                                            searchQuery={searchQuery}
                                            setSearchQuery={setSearchQuery}
                                            search={search}
                                        />

                                    </div>
                                    {showNewUser && <ClientForm url={url} />}
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Nome</th>
                                                <th>Cpf</th>
                                                <th>Data de cadastro</th>
                                                <th>Atualizar</th>
                                                <th>Deletar</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((item: any) => {
                                                return (
                                                    <tr key={item.id}>
                                                        <td>{item.name}</td>
                                                        <td>{item.cpf}</td>
                                                        <td>{item.created_at}</td>
                                                        <td>
                                                            <button>
                                                                atualizar
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button onClick={() => { deleteItem(item.id) }}>
                                                                deletar
                                                            </button>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </>
                            )
                    }
                })()}
            </>

        </Container >
    );
}