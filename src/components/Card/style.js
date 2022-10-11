import styled from "styled-components";

export const Container = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 5px;
    padding: 10px;
    background: #e5243b;
    color: #fff;
    cursor: pointer;

    .card-information {
        display: flex;
        align-items: center;
        gap: 10px;

        h2 {
            font-size: 2.5rem;
        }

        h5 {
            font-weight: 500;
            width: 100px;
            font-size: 0.9rem;
            text-transform: uppercase;
        }
    }
`;