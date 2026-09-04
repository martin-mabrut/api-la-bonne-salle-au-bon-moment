import Express from "express";
import { prisma } from "./src/db/prisma.ts";
import cors from "cors";

const express = Express;
const app = express();
const port = 3000;

app.use(express.json());

app.use(cors());

app.get("/",(req,res) => {
    res.send("Hello World!");
});

/*app.post("/user",async (req,res) =>{
    try {
        const {firstname, lastname, email, password, roleId} = req.body;

        const user = await prisma.user.create({
            data: {
                firstname,
                lastname,
                email,
                password,
                roleId,
            },
        });

        res.status(201).json(user);
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        res.status(500).json({ error : message });
    }
});*/

app.post("/role",async (req,res) => {
    try {
        const {label} = req.body;

        const role = await prisma.role.create({
            data: {label},
        });

        res.status(201).json(role);
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        res.status(500).json({ error : message });
    }
});

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`);
});