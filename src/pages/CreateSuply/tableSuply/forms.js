import axios from "axios";
import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import {FormContainer, Label, InputArea, Input, Button} from "../../../components/Table/styles"


const Form = ({ getSuply, onEdit, setOnEdit }) => {
  const ref = useRef();
  useEffect(() => {
    if (onEdit) {
      const suply = ref.current;
      
      suply.name.value = onEdit.name;
      suply.address.value = onEdit.address;
      suply.number.value = onEdit.number;
      suply.numbertwo.value = onEdit.numbertwo;
      suply.email.value = onEdit.email;
      suply.cnpj.value = onEdit.cnpj;
   
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const suply = ref.current;
   
    if (
      
      !suply.name.value ||
      !suply.address.value ||
      !suply.number.value ||
      !suply.numbertwo.value ||
      !suply.email.value ||
      !suply.cnpj.value 

    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {    
      await axios
          .put("http://localhost:8800/suply/" + onEdit.id, {
          name:  suply.name.value, 
          address:  suply.address.value, 
          number:  suply.number.value, 
          numbertwo:  suply.numbertwo.value, 
          email:  suply.email.value, 
          cnpj:  suply.cnpj.value, 
          
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800/suply/", {
         
          name:  suply.name.value, 
          address:  suply.address.value, 
          number:  suply.number.value, 
          numbertwo:  suply.numbertwo.value, 
          email:  suply.email.value, 
          cnpj:  suply.cnpj.value, 
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }
    
    suply.name.value= ""; 
    suply.address.value =""; 
    suply.number.value =""; 
    suply.numbertwo.value =""; 
    suply.email.value =""; 
    suply.cnpj.value =""; 
    
    setOnEdit(null);
    getSuply();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="name"  type= "text"/>
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
        <Label>CNPJ</Label>
        <Input name="cnpj"/>
      </InputArea>


      <Button type="submit" onClick={handleSubmit}>SALVAR</Button>
    </FormContainer>
  );
};

export default Form;