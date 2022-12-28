import express from "express";
import  router  from "./routes/client.js";
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors())

app.use("/", router);

app.listen(8800);
