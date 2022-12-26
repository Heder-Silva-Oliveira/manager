import React  from "react";
import ChartBar from "../../components/Charts/BarChart";
import ChartDonut from "../../components/Charts/DonutChart";
import ChartLine from "../../components/Charts/LineChart/index"
import Conte from "../../components/Content/index";
import Tabs from "../../components/Table";

import {Content, Div1, InputS, Label, Historic,Box, Box2,} from "./styles"


class Dashboard extends  React.Component{
   render(){
       return(
           <>
                <Conte>
                    <Content>

                        <Div1 >
                        <Box>
                            <hi>Vendas</hi>
                                <Label>Produto
                                    <InputS placeholder="Nome do produto" type={"text"}></InputS>
                                </Label>
                                <Label>Cliente
                                    <InputS placeholder="Quanto lucrar" type={"text"}></InputS>
                                </Label>
                                <Label>Produto
                                    <InputS placeholder="Nome do produto" type={"text"}></InputS>
                                </Label>
                                <Label>Cliente
                                    <InputS placeholder="Quanto lucrar" type={"text"}></InputS>
                                </Label>
                                <Label>Codigo
                                    <InputS placeholder="Digite o codigo" type={"number"}></InputS>
                                </Label>           
                                <Label>Produto
                                    <InputS placeholder="Nome do produto" type={"text"}></InputS>
                                </Label>
                                <Label>Cliente
                                    <InputS placeholder="Quanto lucrar" type={"text"}></InputS>
                                </Label>
                                <Label>Codigo
                                    <InputS placeholder="Digite o codigo" type={"number"}></InputS>
                                </Label>
                                <Label>Produto
                                    <InputS placeholder="Nome do produto" type={"text"}></InputS>
                                </Label>
                                <Label>Cliente
                                    <InputS placeholder="Quanto lucrar" type={"text"}></InputS>
                                </Label>
                                <Label>Codigo
                                    <InputS placeholder="Digite o codigo" type={"number"}></InputS>
                                </Label>
                                <Label>Produto
                                    <InputS placeholder="Nome do produto" type={"text"}></InputS>
                                </Label>
                                <Label>Cliente
                                    <InputS placeholder="Quanto lucrar" type={"text"}></InputS>
                                </Label>
                                <Label>Codigo
                                    <InputS placeholder="Digite o codigo" type={"number"}></InputS>
                                </Label>
                            </Box>
                            <Box2>
                                <Label>Codigo
                                    <InputS placeholder="Digite o codigo" type={"number"}></InputS>
                                </Label>
                            </Box2>
                            
                        </Div1>
                        <Historic>
                            <Tabs/>
                        </Historic>
            
                    </Content>
                </Conte>

                            
           </>
       )
   }
}

export default Dashboard