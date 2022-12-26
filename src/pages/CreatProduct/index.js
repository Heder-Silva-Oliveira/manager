import React  from "react";
import Content from "../../components/Content/index";
import Tabs from "../../components/Table";

import {Boxs, Btn, Boxh, H1,  Forms, Camp, Analy, List, InputS, Box, Label, Select } from "./styles";


class CreateProduct extends  React.Component{
   render(){
       return(
           <>
                <Content>

                        <Forms>
                            <Camp>
                                <Boxh>
                                <H1>CADASTRO DE PRODUTOS</H1>

                                </Boxh>
                                <Box>
                                    <Label>Produto
                                        <InputS placeholder="Nome do produto" type={"text"}></InputS>
                                    </Label>
                                    <Label>Alguma coisa aqui
                                        <InputS placeholder="Quanto lucrar" type={"number"}></InputS>
                                    </Label>
                                    <Label>Codigo
                                        <InputS placeholder="Digite o codigo" type={"number"}></InputS>
                                    </Label>
                                </Box>
                                
                                <Box>
                                    <Label>Preço unitário de compra
                                        <InputS placeholder="Quanto pagou" type={"number"}></InputS>
                                    </Label>
                                    <Label>Preço unitário de venda
                                        <InputS placeholder="Quanto lucrar" type={"number"}></InputS>
                                    </Label>
                                    <Label>Quantidade
                                        <InputS placeholder="Digite a quantidade" type={"number"}></InputS>
                                    </Label>
                                </Box>
                                <Box>
                                    <Label>Marca do produto
                                        <InputS placeholder="Marca do produto" type={"text"}></InputS>
                                    </Label>
                                    <Label>Preço de venda
                                        <InputS placeholder="Quanto lucrar" type={"number"}></InputS>
                                    </Label>
                                    <Label>Data da Compra 
                                        <InputS type={"date"}></InputS>
                                    </Label>
                                </Box>


                                <Boxs>
                                    <Label>Categoria <br></br>
                                            
                                        <Select placeholder="Select">
                                            <option>Roupa</option>
                                            <option>Acessorio</option>
                                            <option>Outro</option>
                                        </Select>
                                    </Label>   
                                </Boxs>
                           <Boxh>
                                <Btn>SALVAR</Btn>
                           </Boxh>
                            </Camp>

                        </Forms>
          
                        <List>
                            <Tabs></Tabs>
                        </List>
                             
                </Content>

                            
           </>
       )
   }
}

export default CreateProduct