import "reflect-metadata"
import express from "express";
import createConnection from "./database"
import { router } from './routes'

createConnection()
const app = express();


// 1 param => ROTA
// 2 param => (request, response)

app.use(express.json());
app.use(router)

export { app };