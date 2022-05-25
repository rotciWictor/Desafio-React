import Styled from "styled-components";

export const main = Styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 45vh;
    padding-top: 2%;
   
`;

export const sectionTitle = Styled.div`
    border-bottom: #2E378A solid 2px;
    width: 80%;
    display: flex;
`;

export const title = Styled.h2`
    width: 80%;
    color: #2E378A;
`;

export const taskBoard = Styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: auto;
`;

export const boards = Styled.div`
     display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 5%;
    width: 78%;
    height: auto;
    padding: 4vh 0%;

`;