import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit} from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const Grid = ({ suply, setSuply, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/product"+ id)
      .then(({ data }) => {
        const newArray = suply.filter((suply) => suply.id !== id);

        setSuply(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };


  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Codigo</Th>
          <Th>Nome</Th>
          <Th>Fornecedor</Th>
          <Th>Preço de compra</Th>
          <Th>Preço de venda</Th>
          <Th>Quantiade</Th>
          <Th>Data da compra</Th>
 
          <Th>Editar</Th>
          <Th>Deletar</Th>
        </Tr>
      </Thead>
      <Tbody>
        {suply.map((item, i) => (
          <Tr key={i}>
            <Td >{item.id}</Td>
            <Td >{item.name}</Td>
            <Td >{item.fkSuply }</Td>
            <Td >{item.pricebuy }</Td>
            <Td >{item.pricesell }</Td>
            <Td >{item.quant}</Td>
            <Td >{item.selldate}</Td>


            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;