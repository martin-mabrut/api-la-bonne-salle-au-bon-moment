import express from "express";
import { roomController } from "../controllers/room.controller.ts";
import { checkRoomData } from "../middlewares/checkRoomData.ts";

const roomRouter = express.Router();

// Routes Room
roomRouter.post("/rooms", checkRoomData, roomController.createRoom);
roomRouter.get("/rooms", roomController.findAllRooms);
roomRouter.get("/rooms/:id", roomController.findRoomById);
roomRouter.put("/rooms/:id", checkRoomData, roomController.updateRoom);
roomRouter.delete("/rooms/:id", roomController.deleteRoom);

export default roomRouter;