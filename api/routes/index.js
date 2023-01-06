
import express from "express";
import {getClient, addClient, deleteClient, updateClient} from "../controllers/client.js";
import { addProduct, deleteProduct, getProduct, updateProduct } from "../controllers/product.js";
import {getSuply, addSuply, updateSuply, deleteSuply} from "../controllers/suply.js";
import {getSales, addSales, updateSales, deleteSales} from "../controllers/sales.js";

const router = express.Router();

router.get("/client", getClient);

router.post("/client", addClient)

router.put("/client/:id", updateClient)

router.delete("/client/:id", deleteClient)


router.get("/suply", getSuply);

router.post("/suply", addSuply)

router.put("/suply/:id", updateSuply)

router.delete("/suply/:id",  deleteSuply)


router.get("/product", getProduct);

router.post("/product", addProduct)

router.put("/product/:id", updateProduct)

router.delete("/product/:id", deleteProduct)


router.get("/sales", getSales);

router.post("/sales", addSales)

router.put("/sales/:id", updateSales)

router.delete("/sales/:id", deleteSales)



export default router;