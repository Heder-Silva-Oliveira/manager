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
/*
const Select = styled.select`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;
*/
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

const Form = ({ getProduct, onEdit, setOnEdit }) => {
  const ref = useRef();
  useEffect(() => {
  console.log(ref)
    if (onEdit) {
      const product = ref.current;
      
      product.name.value = onEdit.name;
      product.fkSuply.value = onEdit.fkSuply;
      product.pricebuy.value = onEdit.pricebuy;
      product.pricesell.value = onEdit.pricesell;
      product.quant.value = onEdit.quant;
      product.selldate.value = onEdit.selldate;
   
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = ref.current;
   
    if (
      
      !product.name.value  ||
      !product.fkSuply.value||
      !product.pricebuy.value  ||
      !product.pricesell.value ||
      !product.quant.value ||
      !product.selldate.value 

    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {    
      await axios
          .put("http://localhost:8800/product/" + onEdit.id, {
          name:  product.name.value, 
          fkSuply: product.fkSuply.value, 
          pricebuy: product.pricebuy.value, 
          pricesell: product.pricesell.value, 
          quant: product.quant.value, 
          selldate: product.selldate.value, 
          
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800/product/", {
          name:  product.name.value, 
          fkSuply: product.fkSuply.value, 
          pricebuy: product.pricebuy.value, 
          pricesell: product.pricesell.value, 
          quant: product.quant.value, 
          selldate: product.selldate.value,  
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }
    
    product.name.value= "";  
    product.fkSuply.value= "";  
    product.pricebuy.value= "";  
    product.pricesell.value= "";  
    product.quant.value= "";  
    product.selldate.value= "";  
        
    setOnEdit(null);
    getProduct();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="name"  type= "text"/>
      </InputArea>
      <InputArea>
        <Label>Fornecedor</Label>
        <Input name="fkSuply"  />
      </InputArea>
      <InputArea>
        <Label>Preço de compra</Label>
        <Input name="pricebuy" />
      </InputArea>
      <InputArea>
        <Label>Preço de venda</Label>
        <Input name="pricesell" />
      </InputArea>
      <InputArea>
        <Label>Quantidade</Label>
        <Input name="quant" type='number'/>
      </InputArea>
      <InputArea>
        <Label>Data da compra</Label>
        <Input name="selldate" type='date'/>
      </InputArea>


      <Button type="submit" onClick={handleSubmit}>SALVAR</Button>
    </FormContainer>
  );
};

export default Form;