import Express from "express";
import cors from "cors";
import reservationRouter from "./routes/reservation.router.ts";
import roomRouter from "./routes/room.router.ts";
import roleRouter from "./routes/role.router.ts";
import userRouter from "./routes/user.router.ts";

const express = Express;
const app = express();
const port = 3000;

app.use(express.json());

app.use(cors());

app.use(reservationRouter);
app.use(roomRouter);
app.use(roleRouter);
app.use(userRouter);

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`);
});