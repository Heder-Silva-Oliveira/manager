import React from "react";
import axios from "axios";
import { FaTrash, FaEdit} from "react-icons/fa";
import { toast } from "react-toastify";
import {Thead, Table, Tbody, Tr, Th, Td} from "../../../components/Table/styles"

const Grid = ({ users, setUsers, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/client/" + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);

        setUsers(newArray);
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
          <Th>Data de Nascimento</Th>
          <Th>Endereço</Th>
          <Th>Telefone</Th>
          <Th>Outro Telefone</Th>
          <Th>Email</Th>
          <Th>CPF</Th>
 
          <Th>Editar</Th>
          <Th>Deletar</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item, i) => (
          <Tr key={i}>
            <Td >{item.id}</Td>
            <Td >{item.name}</Td>
            <Td >{item.birthdate}</Td>
            <Td >{item.address}</Td>
            <Td >{item.number}</Td>
            <Td >{item.numbertwo}</Td>
            <Td >{item.email}</Td>
            <Td >{ item.cpf}</Td>


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