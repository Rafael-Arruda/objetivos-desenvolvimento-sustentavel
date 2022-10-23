import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Area = styled.div`
    width: 900px;
    height: 500px;
    background: ${props => props.background};
    color: #fff;
    padding: 0px 20px;
    border-radius: 2px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .info {
        display: flex;
        flex-direction: column;
        gap: 15px;

        span {
            font-size: 1.1rem;
            width: 450px;
        }
        h2 {
            font-size: 5rem;
            font-weight: 100;
        }
        h1 {
            font-size: 2.5rem;
            font-weight: 500;
        }
    }

    img {
        width: 200px;
        object-fit: cover;
    }
    
    svg {
        background-color: #fff;
        border-radius: 2px;
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }
`;