import { db } from "../db.js";

export const getClient = (_, res) => {
    const q = "SELECT * FROM client";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });

};

export const addClient = (req, res) => {
    const q =
      "INSERT INTO client (`name`, `birthdate`, `address`, `number`, `numbertwo`, `email`, `cpf`, `more`) VALUES (?)";
    const values = [
      
      req.body.name,
      req.body.birthdate,
      req.body.address,
      req.body.number,
      req.body.numbertwo,
      req.body.email,
      req.body.cpf,
      req.body.more,
    ];
  
    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário criado com sucesso.");
    });
  };
  
  export const updateClient = (req, res) => {
    const q =
    
      "UPDATE client SET `name`= ? ,`birthdate`= ?,`address`= ?,`number`= ?,`numbertwo`=?,`email`=?, `cpf`=?, `more`=? WHERE `id` = ?";
    
    const values = [
        req.body.name,
        req.body.birthdate,
        req.body.address,
        req.body.number,
        req.body.numbertwo,
        req.body.email,
        req.body.cpf,
        req.body.more,
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário atualizado com sucesso.");
    });
  };
  
  export const deleteClient = (req, res) => {
    const q = "DELETE FROM client WHERE `id` = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário deletado com sucesso.");
    });
  };