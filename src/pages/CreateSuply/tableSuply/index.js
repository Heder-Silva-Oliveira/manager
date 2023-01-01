import styled from "styled-components";
import Form from "./forms";
import Grid from "./grid";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  margin-left: 15px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function Mostrar() {
  const [suply, setSuply] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getSuply = async () => {
    try {
      const res = await axios.get("http://localhost:8800/suply");
      setSuply(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getSuply();
  }, [setSuply]);

  return (
    <>
      <Container>
        <Title>Cadastro Fornecedores</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getSuply={getSuply} />
        <Grid suply={suply} setSuply={setSuply} setOnEdit={setOnEdit}/>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    </>
  );
}

export default Mostrar;