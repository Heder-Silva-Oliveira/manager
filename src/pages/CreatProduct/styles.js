import styled from "styled-components";

export const Forms = styled.form`
    margin: 10px;
    background-color: #f1f5f8;
`;
export const Camp = styled.div`
    display:block;
    padding-right: 2%;
    background-color: #f1f5f8;
    box-shadow: 0 2px 15px rgb(0, 0, 0, .5);
    border-radius: 10px;
    
`;
export const Box = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    background-color: #f1f5f8;
`;

export const List = styled.div`
    display:flex;
    justify-items: center;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgb(0, 0, 0, .5);
      
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
    margin-top: 2px;
    padding: 10px;
    width: 300px;
    border-radius: 5px;
    border:none;
    background-color: #f1f5f8;
    border-block-end: solid; 
    writing-mode: horizontal-tb;
`; 
export const Label = styled.label`
    margin-top: 10px;
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
export const Boxs =styled.div`
margin-top: 20px;
margin-left: 11%;
    text-align: start;

`;

export const Select = styled.select`
    margin-bottom: 5px;
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