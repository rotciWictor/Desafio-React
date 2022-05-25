import Styled from "styled-components";

export const form = Styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top: 2vh;
    width: 100%;
    height: auto;

    button{
        all: unset;
        height: 5vh;
        width: 25%;
        background-color: #2E378A;
        color: white;
        font-weight: bold;
        text-align: center;
        cursor: pointer;
}
    
`;
export const inputs = Styled.div`
    display: flex;
    justify-content: space-around;
    width: 85%;
    height: auto;
    margin-bottom: 5vh;
    padding-top: 1vh;

    input, select{
        height: 5vh;
        width: 25%;
        border-radius: 1em;
        background-color: white;
        padding-left: 1%;
        cursor: pointer;
        border: #2E378A solid 1px;
        border-top: none;
}
`;


    
