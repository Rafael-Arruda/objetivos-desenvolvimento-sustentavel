import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 15vh;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
    padding: 0px 8%;

    .vertical-line {
        width: 1px;
        height: 10vh;
        background-color: #ddd;
        margin: 0 20px;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    img {
        width: 65px;
    }

    h5 , span {
        color: #529edb;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    span {
        font-size: 0.9rem;
    }
`;

export const Title = styled.div`

    span {
        font-size: 1.2rem;
        text-transform: capitalize;
    }

    h3 {
        font-size: 1.2rem;
        margin-top: 8px;
    }
`;