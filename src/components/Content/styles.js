import styled from "styled-components";

export const Contanier = styled.div`
    display: grid;
    width: 100vw;
    height: 100vh;
    grid-template-columns: 1fr 12fr;
    grid-template-rows: 1fr 12fr;
    background-color: #f1f5f8;
`;

export const Hed = styled.section`
    grid-column: 1/3;
    grid-row: 1;
    min-height:55px ;
    background-color: #f1f5f8;
    text-align:right ;
`;

export const Nav = styled.div`
    grid-column:1 ;
    background-color: #f1f5f8;
    text-align: center;
`;

export const Content = styled.div`
    grid-column:2/13 ;
    background-color: #f1f5f8;
`;
