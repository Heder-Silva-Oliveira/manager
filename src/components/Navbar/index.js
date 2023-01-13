import React from "react";
import { Link } from "react-router-dom";

import { Nav, Li, Ul, Grupo, Span, Icon } from "./styles";

class NavBar extends React.Component {
  render() {
    return (
      <>
        <Nav>
          <Grupo>
            <Ul>
              <Link to="/home" style={{ textDecoration: "none" }}>
                <Li>
                  <Icon>****</Icon>
                  <Span>Dashboard</Span>
                </Li>
              </Link>
              <Link to="/cadastro-cliente" style={{ textDecoration: "none" }}>
                <Li>
                  <Icon>****</Icon>
                  <Span>Cadastro Cliente</Span>
                </Li>
              </Link>
              <Link
                to="/cadastro-fornecedor"
                style={{ textDecoration: "none" }}
              >
                <Li>
                  <Icon>****</Icon>
                  <Span>Cadastro fornecedor</Span>
                </Li>
              </Link>
              <Link to="/cadastro-produtos" style={{ textDecoration: "none" }}>
                <Li>
                  <Icon>****</Icon>
                  <Span>Cadastro produtos</Span>
                </Li>
              </Link>
              <Link to="/vendas" style={{ textDecoration: "none" }}>
                <Li>
                  <Icon>****</Icon>
                  <Span>Vendas</Span>
                </Li>
              </Link>
              <Link to="/adm" style={{ textDecoration: "none" }}>
                <Li>
                  <Icon>****</Icon>
                  <Span>Admin</Span>
                </Li>
              </Link>
            </Ul>
          </Grupo>
        </Nav>
      </>
    );
  }
}

export default NavBar;
