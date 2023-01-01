import React from "react";
import Conte from "../../components/Content/index";
import Mostrar from "./tableClient";




import {Forms, Camp, Analy, List } from "./styles";

class CreateClient extends  React.Component{
    
   render(){
       return(
           <>
                <Conte>

                        <Forms>
                            <Camp>
                                <Mostrar/>
                            </Camp>

                        </Forms>
                        <Analy>Oi</Analy>
                        <List>

                        </List>
                              
                </Conte>

                            
           </>
       )
   }
}

export default CreateClient