import express, { Application, Request, Response } from "express";
import cors from "cors"
import UserController from "./controllers/UserController";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req: Request, res: Response) => {
  res.send("hola desde mi servidor con ts");
});

//Rutas  de Usuario 
app.post("/user/create" , UserController.signUp);
app.post("/user/singIn" ,UserController.signIn)
export default app;
