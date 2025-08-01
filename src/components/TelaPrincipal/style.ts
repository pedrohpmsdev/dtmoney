import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    img {
        width: 250px;
        border-radius: 30%;
        margin-top: -10rem;
    }

    .buttons {
        display: flex;
        gap: 20px;
        justify-content: center;
    }

    button {
        white-space: nowrap;
        background-color: #fbf3d9ff;
        width: 100%;
        padding: 0 7rem;
        height: 5rem;
        border-radius: 2rem;
        border: 0;
        font-size: 1.15rem;
        font-weight: 500;

        margin-left: 8rem;

        transition: filter 0.2s;
        transition: transform 0.2s;
        &:hover{
            filter: brightness(0.9);
            transform: translateY(-15px)
        }

        & + button {
            margin-right: 8rem;
        }
    }
    
    
`;

export const DivImgText = styled.div`
    margin: 0 auto;
    margin-right: 12.5rem;
    white-space: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;

    .side-text {
        font-size: 1.2rem;
        max-width: 200px;
        text-align: center;
    }

    div{
        margin-top: -10rem;
    }
`;