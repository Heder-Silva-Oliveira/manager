import express from "express";
import {getClient, addClient, deleteClient, updateClient} from "../controllers/client.js";

const router = express.Router();

router.get("/", getClient);

router.post("/", addClient)

router.put("/:id", updateClient)

router.delete("/:id", deleteClient)

export default router;
