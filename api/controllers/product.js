import { db } from "../db.js";

export const getProduct = (_, res) => {
    const q = "SELECT * FROM product";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });

};

export const addProduct = (req, res) => {
    const q =
      "INSERT INTO product (`name`, `fkSuply`, `pricebuy`, `pricesell`, `quant`, `selldate`) VALUES (?)";
    const values = [
      
      req.body.name,
      req.body.fkSuply,
      req.body.pricebuy,
      req.body.pricesell,
      req.body.quant,
      req.body.selldate,
    ];
  
    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Produto criado com sucesso.");
    });
  };
  
  export const updateProduct = (req, res) => {
    const q =
    
      "UPDATE product SET `name`= ? ,`fkSuply`= ?,`pricebuy`= ?,`pricesell`= ?,`quant`=?,`selldate`=? WHERE `id` = ?";
    
    const values = [
        req.body.name,
        req.body.fkSuply,
        req.body.pricebuy,
        req.body.pricesell,
        req.body.quant,
        req.body.selldate,
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Produto atualizado com sucesso.");
    });
  };
  
  export const deleteProduct = (req, res) => {
    const q = "DELETE FROM product WHERE `id` = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Produto deletado com sucesso.");
    });
  };