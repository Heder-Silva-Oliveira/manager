
import express from "express";
import {getClient, addClient, deleteClient, updateClient} from "../controllers/client.js";
import { addProduct, deleteProduct, getProduct, updateProduct } from "../controllers/product.js";
import {getSuply, addSuply, updateSuply, deleteSuply} from "../controllers/suply.js";

const router = express.Router();

router.get("/", getClient);

router.post("/", addClient)

router.put("/:id", updateClient)

router.delete("/:id", deleteClient)

router.get("/suply", getSuply);

router.post("/suply", addSuply)

router.put("/suply/:id", updateSuply)

router.delete("/suply/:id", deleteSuply)

router.get("/product", getProduct);

router.post("/product", addProduct)

router.put("/product/:id", updateProduct)

router.delete("/product/:id", deleteProduct)


export default router;