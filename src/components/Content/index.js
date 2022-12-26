import React from 'react';
import Header from '../Header';
import NavBar from '../Navbar';
import { Contanier, Content, Hed, Nav } from './styles';




class Conte extends  React.Component{
   render(){
       return(
          <>
          <Contanier>
            <Hed>
              <Header>OLa</Header>
            </Hed>
            <Nav>
              <NavBar></NavBar>
            </Nav>
            <Content>
            {this.props.children}  
            </Content>
          </Contanier> 


                            
           </>
       )
   }
}

export default Conte;


