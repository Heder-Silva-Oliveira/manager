import { db } from "../db.js";

export const getSales = (_, res) => {
    const q = "SELECT * FROM sales";
    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });

};

export const addSales = (req, res) => {
    const q =
      "INSERT INTO sales (`fkproduct`, `fkclient`, `quant`, `mont`, `profit`, `typePay`, `selldate`) VALUES (?)";
                         
    const values = [
      
      req.body.fkproduct,
      req.body.fkclient,
      req.body.quant,
      req.body.mont,
      req.body.profit,
      req.body.typePay,
      req.body.selldate,
    ];
  
    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Venda criada com sucesso.");
    });
  };
  
  export const updateSales = (req, res) => {
    const q =
      "UPDATE sales SET `fkproduct`= ?,`fkclient`= ?,`quant`=?,`mont`=?, `profit`=?, `typePay`=?, `selldate`=? WHERE `id` = ?";
      
    const values = [
        req.body.fkproduct,
        req.body.fkclient,
        req.body.quant,
        req.body.mont,
        req.body.profit,
        req.body.typePay,
        req.body.selldate,
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Venda atualizada com sucesso.");
    });
  };

  export const deleteSales  = (req, res) => {
    const q = "DELETE FROM sales WHERE `id` = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Venda deletada com sucesso.");
    });
  };
  