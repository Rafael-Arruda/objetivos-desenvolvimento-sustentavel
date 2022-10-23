import styled from "styled-components";

export const Container = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 5px;
    padding: 10px;
    background: ${props => props.background};
    color: #fff;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transition: 0.3s all;

    :hover {
        transform: scale(1.05);
    }

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

    img {
        width: 60px;
        height: 60px;
    }
    
`;