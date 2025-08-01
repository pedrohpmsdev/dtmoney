import styled from "styled-components";

export const Container = styled.header`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-around;

    h1 {
        color: #fbf3d9ff;  
    }

    .typing {
        white-space: nowrap;
        overflow: hidden;
        border-right: 2px solid #333;
        width: 0;
        animation: typing 3s steps(41, end) forwards,
                   blink 1s step-end infinite;
    }

    @keyframes typing {
        from {width: 0%}
        to {width: 41%}
    }

    @keyframes blink {
        50% {border-color: transparent}
    }
        `;


  