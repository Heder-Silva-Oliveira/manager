import React  from "react";
import ChartBar from "../../components/Charts/BarChart";
import ChartDonut from "../../components/Charts/DonutChart";
import ChartLine from "../../components/Charts/LineChart/index"
import Conte from "../../components/Content/index";


import {Content, Div1, Div2, Div3, Historic} from "./styles"


class Dashboard extends  React.Component{
   render(){
       return(
           <>
                <Conte>
                    <Content>

                        <Div1 >
                            <label>Resumo de vendas

                        <ChartLine/>                        
                            </label>
                        </Div1>
                        <Div2>
                        <label>Resumo de produtos
                            <ChartBar/>
                            </label>
                        </Div2>
                        <Div3>
                        <label >Meta 
                            <ChartDonut/>
                            </label>
                        </Div3>
                        <Historic>
                            
                        </Historic>
            
                    </Content>
                </Conte>

                            
           </>
       )
   }
}

export default Dashboard