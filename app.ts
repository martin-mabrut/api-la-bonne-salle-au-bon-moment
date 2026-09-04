import Express from "express";
import cors from "cors";
import { userController } from "./controllers/user.controller.ts";
import { roomController } from "./controllers/room.controller.ts";

const express = Express;
const app = express();
const port = 3000;

app.use(express.json());

app.use(cors());

//Routes User
app.post("/users", userController.createUser);
app.get("/users", userController.findAllUsers);
app.get("/users/:id", userController.findUserById);
app.put("/users/:id", userController.updateUser);
app.delete("/users/:id", userController.deleteUser);

// Routes Room
app.post("/rooms", roomController.createRoom);
app.get("/rooms", roomController.findAllRooms);
app.get("/rooms/:id", roomController.findRoomById);
app.put("/rooms/:id", roomController.updateRoom);
app.delete("/rooms/:id", roomController.deleteRoom);

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`);
});