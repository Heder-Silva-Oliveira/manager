import styled from "styled-components";

export const Forms = styled.form`
    margin: 10px;
    background-color:black;
`;
export const Camp = styled.div`
    display:block;
    padding-right: 2%;
    background-color: #f1f5f8;
    box-shadow: 0 2px 15px rgb(0, 0, 0, .5);
    
`;
export const Box = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-items: end;

    background-color: #f1f5f8;
`;
export const Analy = styled.div`
    background-color: blueviolet;
`;
export const List = styled.div`
    display:flex;
    justify-items: center;
 
    margin-left: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    border-radius: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgb(0, 0, 0, .5);
    background-color:  #f1f5f8;
    width: 100%;
    grid-row: 2;
    grid-column: 1/3;
`;


export const InputL = styled.input`
    display: block;
    margin-top: 5px;
    margin-bottom: 10px;
    padding: 10px;
    width: 700px;
    border-radius: 5px;
    border: none;
    background-color: #f1f5f8;
    border-block-end: solid; 
    writing-mode: horizontal-tb;
`;

export const InputS = styled.input`
    display: block;
    margin-top: 5px;
    padding: 10px;
    width: 300px;
    border-radius: 5px;
    border:none;
    background-color: #f1f5f8;
    border-block-end: solid; 
    writing-mode: horizontal-tb;
`; 
export const Label = styled.label`
    margin-top: 5px;
    background-color: F1F5F;
`;
export const H1 = styled.h1`

    font-family: sans-serif;
    font-size: x-large;
`;
export const Boxh =styled.div`
    padding-top: 5px;
    margin-left: 2%;
    text-align: center;

`;
export const Select = styled.select`
    //display: block;
    margin-bottom: 5px;
    //padding: 10px;
    //width: 300px;
    border-radius: 5px;
    border:none;
    background-color: #f1f5f8;
    border-block-end: solid; 
    writing-mode: horizontal-tb;

`;
export const Btn =styled.button`
width: 100px;
margin-bottom: 5px;
padding: 5px;
    color: white;
    border: none;
    border-radius: 5px;
    background-color: #4B56D2;

`;

//TABLE

export const Table = styled.table`
    text-align: center;
    table-layout: auto;
    width: 100vw;
    height: fit-content;
    margin-left: 10px;
    margin-top: 10px;
    margin-right: 10px;
   
    background-color: #D3DEDC;
`;

export const Th = styled.th`
    background-color: #92A9BD;

`;


export const Tr = styled.tr`
    background-color: #D3DEDC;
    height: 20px;

  
`;

export const Td = styled.td`
    background-color: #D3DEDC;
    height: 20px;
`;
export const Tb = styled.td`
`;
