import Express from "express";
import cors from "cors";
import { userController } from "./controllers/user.controller.ts";
import { roomController } from "./controllers/room.controller.ts";
import { reservationController } from "./controllers/reservation.controller.ts";
import { roleController } from "./controllers/role.controller.ts"

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

// Routes Reservation
app.post("/reservations", reservationController.createReservation);
app.get("/reservations", reservationController.findAllReservations);
app.get("/rerservations/:id", reservationController.findReservationById);
app.put("/reservations/:id", reservationController.updateReservation);
app.delete("/reservations/:id", reservationController.deleteReservation);

// Routes Roles
app.post("/roles", roleController.createRole);
app.get("/roles", roleController.findAllRoles);
app.get("/roles/:id", roleController.findRoleById);
app.put("/roles/:id", roleController.updateRole);
app.delete("/roles/:id", roleController.deleteRole);

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`);
});