import { Search as search } from "js-search";

import { FormEvent } from "react";

import { Container } from "./styles";

interface ISearch {
    searchQuery: string;
    setSearchQuery: any;
    search: search
}

export function Search({ searchQuery, setSearchQuery, search }: ISearch) {

    function handleInputSearch(event: FormEvent) {
        event.preventDefault();

        console.log(search.search(searchQuery));
    }

    return (
        <Container onSubmit={handleInputSearch}>
            <input
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
            />
            <button type="submit">Search</button>
        </Container>
    );
}