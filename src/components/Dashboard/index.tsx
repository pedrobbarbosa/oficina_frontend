import { useState } from "react";
import { Container, Summary } from "./style";

import { Table } from "../Table/"


export function Dashboard() {
    const [displayTable, setdisplayTable] = useState("users");

    function showClients(text: string) {
        setdisplayTable(text)
    }

    return (
        <Container>
            <Summary>
                <div className={displayTable === 'budgets' ? 'highlight-background' : ''}>
                    <button type="button" onClick={() => { showClients("budgets") }}>
                        Orçamento
                    </button>
                </div>

                <div className={displayTable === 'users' ? 'highlight-background' : ''}>
                    <button type="button" onClick={() => { showClients("users") }}>
                        Clientes
                    </button>
                </div>

                <div className={displayTable === 'sellers' ? 'highlight-background' : ''}>
                    <button type="button" onClick={() => { showClients("sellers") }}>
                        Vendedores
                    </button>
                </div>

            </Summary>
            {<Table url={displayTable} />}
        </Container>
    );

}