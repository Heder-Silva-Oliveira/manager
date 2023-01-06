import axios from "axios";
import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import Select from "react-select";
import {FormContainer, Label, InputArea, Input, Button} from "../../../components/Table/styles"

const Form = ({suplys, getProduct, onEdit, setOnEdit }) => {
  const ref = useRef();
  useEffect(() => {

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
        <Select options={
          suplys.map((item) => (
              {value: item.id, label: item.name}
  ))} name="fkSuply"/>   
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