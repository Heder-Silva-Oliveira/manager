import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Select = styled.select`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();
  useEffect(() => {
  
    if (onEdit) {
      const user = ref.current;
      
      user.name.value = onEdit.name;
      user.birthdate.value = onEdit.birthdate;
      user.address.value = onEdit.address;
      user.number.value = onEdit.number;
      user.numbertwo.value = onEdit.numbertwo;
      user.email.value = onEdit.email;
      user.cpf.value = onEdit.cpf;
      user.genre.value = onEdit.genre;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = ref.current;
   
    if (
      
      !user.name.value ||
      !user.birthdate.value ||
      !user.address.value ||
      !user.number.value ||
      !user.numbertwo.value ||
      !user.email.value ||
      !user.cpf.value ||
      !user.genre.value 
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {    
      await axios
          .put("http://localhost:8800/" + onEdit.id, {
          name:  user.name.value, 
          birthdate:  user.birthdate.value, 
          address:  user.address.value, 
          number:  user.number.value, 
          numbertwo:  user.numbertwo.value, 
          email:  user.email.value, 
          cpf:  user.cpf.value, 
          genre:  user.genre.value, 
          
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800/", {
         
          name:  user.name.value, 
          birthdate:  user.birthdate.value, 
          address:  user.address.value, 
          number:  user.number.value, 
          numbertwo:  user.numbertwo.value, 
          email:  user.email.value, 
          cpf:  user.cpf.value, 
          genre:  user.genre.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }
    
    user.name.value= ""; 
    user.birthdate.value =""; 
    user.address.value =""; 
    user.number.value =""; 
    user.numbertwo.value =""; 
    user.email.value =""; 
    user.cpf.value =""; 
    user.genre.value =""; 
    
    setOnEdit(null);
    getUsers();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="name"  type= "text"/>
      </InputArea>
      <InputArea>
        <Label>Data nascimento</Label>
        <Input name="birthdate" type="date" />
      </InputArea>
      <InputArea>
        <Label>Endereço</Label>
        <Input name="address"  />
      </InputArea>
      <InputArea>
        <Label>Telefone</Label>
        <Input name="number" />
      </InputArea>
      <InputArea>
        <Label>Outro telefone</Label>
        <Input name="numbertwo" />
      </InputArea>
      <InputArea>
        <Label>E-mail</Label>
        <Input name="email" type= "email"/>
      </InputArea>
      <InputArea>
        <Label>CPF</Label>
        <Input name="cpf"/>
      </InputArea>
      <InputArea>
      <Label>Sexo</Label>
        <Select name="genre" placeholder="Select">
            <option>Marculino</option>
            <option>Feminino</option>                                      
        </Select>
      </InputArea>

      <Button type="submit" onClick={handleSubmit}>SALVAR</Button>
    </FormContainer>
  );
};

export default Form;