import { db } from "../db.js";

export const getSuply = (_, res) => {
    const q = "SELECT * FROM suply";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });

};

export const addSuply = (req, res) => {
    const q =
      "INSERT INTO suply (`name`, `address`, `number`, `numbertwo`, `email`, `cnpj`) VALUES (?)";
                         
    const values = [
      
      req.body.name,
      req.body.address,
      req.body.number,
      req.body.numbertwo,
      req.body.email,
      req.body.cnpj,
    ];
  
    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Fornecedor criado com sucesso.");
    });
  };
  
  export const updateSuply = (req, res) => {
    const q =
      "UPDATE suply SET `name`= ? ,`address`= ?,`number`= ?,`numbertwo`=?,`email`=?, `cnpj`=? WHERE `id` = ?";
      
    const values = [
        req.body.name,
        req.body.address,
        req.body.number,
        req.body.numbertwo,
        req.body.email,
        req.body.cnpj,
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Fornecedor atualizado com sucesso.");
    });
  };
  
  export const deleteSuply = (req, res) => {
    const q = "DELETE FROM suply WHERE `id` = ?";
    alert("CHEGUEI AQUI")
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Fornecedor deletado com sucesso.");
    });
  };