import React from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import {
  Thead,
  Table,
  Tbody,
  Tr,
  Th,
  Td,
} from "../../../components/Table/styles";

const Grid = ({ product, client, sales, setSales, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/sales" + id)
      .then(({ data }) => {
        const newArray = sales.filter((sales) => sales.id !== id);

        setSales(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };
  function getNameClient(paran) {
    const namesf = client.filter((client) => client.id === paran);
    const sonome = namesf.map((item) => item.name);
    return sonome;
  }

  function getNameProduct(paran) {
    const namesf = product.filter((product) => product.id === paran);
    const sonome = namesf.map((item) => item.name);
    return sonome;
  }

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Codigo</Th>
          <Th>Produto</Th>
          <Th>Nome Cliente</Th>
          <Th>Quantiade</Th>
          <Th>Valor da venda</Th>
          <Th>Lucro</Th>
          <Th>Pagamento</Th>
          <Th>Data</Th>

          <Th>Editar</Th>
          <Th>Deletar</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sales.map((item, i) => (
          <Tr key={i}>
            <Td>{item.id}</Td>
            <Td>{getNameProduct(item.fkproduct)}</Td>
            <Td>{getNameClient(item.fkclient)}</Td>
            <Td>{item.quant}</Td>
            <Td>{item.mont}</Td>
            <Td>{item.profit}</Td>
            <Td>{item.typePay}</Td>
            <Td>{item.selldate}</Td>

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
