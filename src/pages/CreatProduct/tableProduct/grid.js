import React from "react";
import axios from "axios";
import { FaTrash, FaEdit} from "react-icons/fa";
import { toast } from "react-toastify";
import {Thead, Table, Tbody, Tr, Th, Td} from "../../../components/Table/styles"

const Grid = ({suplys, product, setProduct, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/product/"+ id)
      .then(({ data }) => {
        const newArray = product.filter((product) => product.id !== id);

        setProduct(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

 function busca(paran){
  const namesf = suplys.filter((suplys) => suplys.id === paran)
  const sonome = namesf.map((item) => ( item.name))
   return( 
   sonome
   )
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
        {product.map((item, i) => (
          <Tr key={i}>
            <Td >{item.id}</Td>
            <Td >{item.name}</Td>           
            <Td >{busca(item.fkSuply)} </Td>          
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