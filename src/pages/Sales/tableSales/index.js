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
  const [sales, setSales] = useState([]);
  const [product, setProduct] = useState([]);
  const [client, setClient] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  
  const getSales = async () => {
    try {
      const res = await axios.get("http://localhost:8800/sales");
      setSales(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  const getProduct = async () => {
    try {
      const res = await axios.get("http://localhost:8800/product");
      setProduct(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  const getClient = async () => {
    try {
      const res = await axios.get("http://localhost:8800/client");
      setClient(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getProduct();
    getClient();
    getSales();
  }, [setSales]);

  return (
    <>
      <Container>
        <Title>Vendas</Title>
        <Form product={product} client={client} onEdit={onEdit} setOnEdit={setOnEdit} getSales={getSales}/>
        <Grid product={product} client={client}  sales={sales} setSales={setSales} setOnEdit={setOnEdit}/>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    </>
  );
}

export default Mostrar;