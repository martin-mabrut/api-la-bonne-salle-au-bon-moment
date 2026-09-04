import Express from "express";
import cors from "cors";
import { userController } from "./controllers/user.controller.ts";

const express = Express;
const app = express();
const port = 3000;

app.use(express.json());

app.use(cors());

app.get("/",(req,res) => {
    res.send("Hello World!");
});

//Routes User
app.post("/users", userController.createUser);
app.get("/users", userController.findAllUsers);
app.get("/users/:id", userController.findUserById);
app.put("/users/:id", userController.updateUser);
app.delete("/users/:id", userController.deleteUser);

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`);
});