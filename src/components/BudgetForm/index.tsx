import React, { Component, FormEvent, useEffect, useState } from 'react'
import Select from 'react-select'

import { api } from "../../services/api";

import { Container } from "./styles";

interface IBudgetForm {
    url: string
}

interface IResponseUsers {
    id: string;
    name: string
}

interface IResponseSellers {
    id: string;
    name: string
}

export function BudgetForm({ url }: IBudgetForm) {
    const [clientsOptions, setClientsOptions] = useState<IResponseUsers[]>();
    const [sellersOptions, setSellersOptions] = useState<IResponseSellers[]>();

    const [clientValue, setClientValue] = useState({});
    const [sellerValue, setSellerValue] = useState({});
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    useEffect(() => {
        async function getOptions() {
            const responseUsers = await api.get('/users');
            const responseSellers = await api.get('/sellers');

            setClientsOptions(responseUsers.data);
            setSellersOptions(responseSellers.data);

            console.log(responseUsers.data, responseSellers.data);

        };

        getOptions();
    }, []);


    function handleCreateNewUser(event: FormEvent) {
        event.preventDefault();

        const data = {
            user_id: clientValue,
            seller_id: sellerValue,
            description,
            value
        }

        api.post("/budgets", data);
    }

    return (
        <Container onSubmit={handleCreateNewUser}>
            <Select
                placeholder="Cliente"
                onChange={client => { setClientValue({ id: client?.value }) }}
                options={clientsOptions?.map((client) => { return { value: client.id, label: client.name } })} />
            <Select
                placeholder="Vendedor"
                onChange={value => { setSellerValue({ id: value?.value }) }}
                options={sellersOptions?.map((seller) => { return { value: seller.id, label: seller.name } })} />

            <input type="text"
                value={description}
                onChange={event => setDescription(event.target.value)}
                placeholder="Descrição"
            />
            <input type="number"
                onChange={event => setValue(event.target.value)}
                value={value}
                placeholder="Valor" />

            <button type="submit" onClick={handleCreateNewUser}>
                Registrar
            </button>
        </Container>
    );
}