import styled from "styled-components";

export const Content = styled.div`
    display: grid;
    column-gap: 5px;
    height: 100%;
    grid-template-columns: 1fr ;
    grid-template-rows: 1fr 1fr;

`;

export const Div1 = styled.div`
    display:grid;
    grid-template-columns: 3fr 1fr;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-top: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding-top: 10px;
    border-radius: 10px;
    grid-row: 1;
    box-shadow: 0 2px 15px rgb(0, 0, 0, .5);
    `;
export const Box = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    padding-top: 10px;
    padding-bottom: 15px;
    border-radius: 10px;
       
`;
export const Box2 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    padding-top: 10px;
    border-radius: 10px;
  
    
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
    background-color: azure;
`; 
export const Label = styled.label`
    margin-top: 10px;
    width: fit-content;

`;
export const Div2 = styled.div`
display:flex;
justify-content: center;
align-items: center;
margin-left: 10px;
margin-top: 10px;
margin-right: 10px;
margin-bottom: 10px;
padding-top: 10px;
border-radius: 10px;
grid-row: 1;
box-shadow: 0 2px 15px rgb(0, 0, 0, .5);

`;
export const Div3 = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-left: 10px;
margin-top: 10px;
margin-right: 10px;
margin-bottom: 10px;
padding-top: 10px;
border-radius: 10px;
grid-row: 1;
border-radius: 10px;
box-shadow: 0 2px 15px rgb(0, 0, 0, .5);

`;
export const Historic = styled.div`
display:flex;
justify-items: center;
margin-left: 10px;
margin-bottom: 10px;
margin-right: 10px;
border-radius: 10px;
grid-row: 2;
grid-column: 1/4;
border-radius: 10px;
box-shadow: 0 2px 15px rgb(0, 0, 0, .5);

`;