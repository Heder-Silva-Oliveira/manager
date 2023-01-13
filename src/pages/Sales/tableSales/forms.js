import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import Select from "react-select";

import {
  FormContainer,
  Label,
  InputArea,
  Input,
  Button,
} from "../../../components/Table/styles";

/*
var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
var dataAtual = dia + '/' + mes + '/' + ano;
*/

const Form = ({ product, client, getSales, onEdit, setOnEdit }) => {
  const ref = useRef();
  useEffect(() => {
    if (onEdit) {
      const sales = ref.current;

      sales.fkproduct.value = onEdit.fkproduct;
      sales.fkclient.value = onEdit.fkclient;
      sales.quant.value = onEdit.quant;
      sales.mont.value = onEdit.mont;
      sales.profit.value = onEdit.profit;
      sales.typePay.value = onEdit.typePay;
      sales.selldate.value = onEdit.selldate;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sales = ref.current;
    console.log(JSON.stringify(sales.typePay.value));
    if (
      !sales.fkproduct.value ||
      !sales.fkclient.value ||
      !sales.quant.value ||
      !sales.mont.value ||
      !sales.profit.value ||
      !sales.typePay.value ||
      !sales.selldate.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/sales/" + onEdit.id, {
          fkproduct: sales.fkproduct.value,
          fkclient: sales.fkclient.value,
          quant: sales.quant.value,
          mont: sales.mont.value,
          profit: sales.profit.value,
          typePay: sales.typePay.value,
          selldate: sales.selldate.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800/sales/", {
          fkproduct: sales.fkproduct.value,
          fkclient: sales.fkclient.value,
          quant: sales.quant.value,
          mont: sales.mont.value,
          profit: sales.profit.value,
          typePay: sales.typePay.value,
          selldate: sales.selldate.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    sales.fkproduct.value = "";
    sales.fkclient.value = "";
    sales.quant.value = "";
    sales.mont.value = "";
    sales.profit.value = "";
    sales.typePay.value = "";
    sales.selldate.value = "";

    setOnEdit(null);
    getSales();
  };
  const options = [
    { value: "Debito", label: "Debito" },
    { value: "Credito", label: "Credito" },
  ];

  const [productState, setIdProduct] = useState("");
  const getIdProduct = (event) => {
    const value = event.value;
    setIdProduct(value);
  };

  const [quantState, setQuant] = useState("");

  function montSales(paran) {
    const priceB = product.filter((product) => product.id === paran);
    const total = priceB.map((item) => item.pricesell);
    return total;
  }

  function profitSales(paran) {
    const priceB = product.filter((product) => product.id === paran);
    const total = priceB.map((item) => item.pricebuy);
    return total;
  }

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Produto</Label>
        <Select
          onChange={getIdProduct}
          options={product.map((item) => ({
            value: item.id,
            label: item.name,
          }))}
          name="fkproduct"
        />
      </InputArea>
      <InputArea>
        <Label>Cliente</Label>
        <Select
          options={client.map((item) => ({ value: item.id, label: item.name }))}
          name="fkclient"
        />
      </InputArea>

      <InputArea>
        <Label>Quantidade</Label>
        <Input
          min="1"
          value={quantState}
          onChange={(e) => setQuant(e.target.value)}
          name="quant"
          type="number"
        />
      </InputArea>
      <InputArea>
        <Label>Valor da venda</Label>
        <Input
          readonly
          value={montSales(productState) * quantState}
          name="mont"
        />
      </InputArea>
      <InputArea>
        <Label>Lucro</Label>
        <Input
          readonly
          value={
            montSales(productState) * quantState -
            profitSales(productState) * quantState
          }
          name="profit"
        />
      </InputArea>
      <InputArea>
        <Label>Pagamento</Label>
        <Select options={options} name="typePay" />
      </InputArea>
      <InputArea>
        <Label>Data</Label>
        <Input name="selldate" type="date" />
      </InputArea>
      <Button type="submit" onClick={handleSubmit}>
        SALVAR
      </Button>
    </FormContainer>
  );
};

export default Form;
