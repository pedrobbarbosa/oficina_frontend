import styled from "styled-components";


export const Container = styled.main`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2.5rem 1rem;


    button {
        font-size: 1rem;
        color: var(--text-title);
        background: var(--blue-light);
        background: none;
        border: none;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9)
        }
    }
`;

export const Summary = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: --10rem;

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between
        }

        button {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.highlight-background {
            background: var(--blue-light);
            color: #FFF;
        }
    }
`;