import React from "react";
import Conte from "../../components/Content/index";
import Mostrar from "./tableSuply";




import {Forms, Camp, List } from "./styles";

class CreateSuply extends  React.Component{
    
   render(){
       return(
           <>
                <Conte>

                        <Forms>
                            <Camp>
                                <Mostrar/>
                            </Camp>

                        </Forms>
                        
                        <List>

                        </List>
                              
                </Conte>

                            
           </>
       )
   }
}

export default CreateSuply