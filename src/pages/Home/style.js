import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    h1 {
        max-width: 700px;
        width: 100%;
        margin-bottom: 35px;
        letter-spacing: 1px;
    }

    p {
        width: 100%;
        max-width: 780px;
        line-height: 24px;
        margin-bottom: 40px;
    }
`;

export const Content = styled.div`
    padding: 20px 8%;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 20px;

    @media screen and (max-width: 500px){
        justify-content: center;
    }
`;