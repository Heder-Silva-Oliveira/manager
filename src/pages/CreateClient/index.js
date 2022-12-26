import React  from "react";
import Conte from "../../components/Content/index";
import Tabs from "../../components/Table";

import {Btn, Boxh, H1, Forms, Camp, Analy, List, InputL, InputS, Box, Label, Select } from "./styles";


class CreateClient extends  React.Component{
   render(){
       return(
           <>
                <Conte>

                        <Forms>
                            <Camp>
                                <Boxh>
                                <H1>CADASTRO</H1>

                                </Boxh>
                                <Box>
                                    <Label>Nome
                                        <InputL placeholder="Digite aqui o nome do cliente"></InputL>
                                    </Label>
                                    <Label>Nascimento
                                        <InputS type={"date"}></InputS>
                                    </Label>
                                </Box>
                                
                                <Box>
                                    <Label>Endereço
                                        <InputL placeholder="Digite aqui o endereço do cliente"></InputL>
                                    </Label>
                                    <Label>Telefone
                                        <InputS placeholder="Digite aqui o telefone do cliente" type={"tel"}></InputS>
                                    </Label>
                                </Box>
                                <Box>
                                    <Label>E-mail
                                        <InputL placeholder="Digite o e-mail do cliente"></InputL>
                                    </Label>
                                    <Label>Outro telefone
                                        <InputS placeholder="Digite o segundo telefone"></InputS>
                                    </Label>
                                </Box>
                                <Box>
                                    <Label>Outro
                                        <InputL placeholder="Outras informações"></InputL>
                                    </Label>
                                    <Label>CPF
                                        <InputS placeholder="Digite o cpf do cliente"></InputS>
                                    </Label>
                                </Box>
                                <Box>
                                    <Label>Sexo <br></br>
                                            
                                        <Select placeholder="Select">
                                            <option>Masculino</option>
                                            <option>Feminino</option>
                                            <option>Outro</option>
                                        </Select>
                                    </Label>   
                                </Box>
                           <Boxh>
                                <Btn>SALVAR</Btn>
                           </Boxh>
                            </Camp>

                        </Forms>
                        <Analy>Oi</Analy>
                        <List>
                        <Tabs></Tabs>
                        </List>
                              
                </Conte>

                            
           </>
       )
   }
}

export default CreateClient