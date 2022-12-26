import React from "react";
import {Table, Tr, Th, Td } from "./styles";

class Tabs extends React.Component{
    render(){
        return(
            <>
            <Table >
                <Tr>
                    <Th>ID</Th>
                    <Th>Nome</Th>
                    <Th>Emanil</Th>
                    <Th>Telefone</Th>
                    <Th>Status</Th>
                </Tr>
                <Tr>
                    <Td>1</Td>
                    <Td>José Paulo</Td>
                    <Td>jose@hotmail.com</Td>
                    <Td>66 8794561</Td>
                    <Td>Ativo</Td>
                </Tr>
                <Tr>
                    <Td>2</Td>
                    <Td>Marco Junior</Td>
                    <Td>marco@hotmail.com</Td>
                    <Td>66 9784547</Td>
                    <Td>Ativo</Td>
                </Tr>
                <Tr>
                    <Td>3</Td>
                    <Td>Gustavo Alter</Td>
                    <Td>gustavo@hotmail.com</Td>
                    <Td>66 9482569</Td>
                    <Td>Ativo</Td>
                </Tr>
                <Tr>
                    <Td>4</Td>
                    <Td>Antonio Foices</Td>
                    <Td>antonio@hotmail.com</Td>
                    <Td>66 9185568</Td>
                    <Td>Ativo</Td>
                </Tr>
                <Tr>
                    <Td>5</Td>
                    <Td>João Machado</Td>
                    <Td>joao@hotmail.com</Td>
                    <Td>66 9282566</Td>
                    <Td>Inativo</Td>
                </Tr>
            </Table>
            </>

        )
    }     
}
export default  Tabs