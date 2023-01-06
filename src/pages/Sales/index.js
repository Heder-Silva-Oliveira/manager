import React  from "react";
import Conte from "../../components/Content/index";

import {Content,} from "./styles"
import Mostrar from "./tableSales";


class Dashboard extends  React.Component{
   render(){
       return(
           <>
                <Conte>
                    <Content>
                        <Mostrar/>
                    </Content>
                </Conte>

                            
           </>
       )
   }
}

export default Dashboard