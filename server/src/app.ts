import express, { Express } from "express";
import cors from "cors";
import connectDatabase from "./database/db";
import gridRouter from "./routes/grid";
import paymentsRouter from "./routes/payments";

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("/api/grid", gridRouter);
app.use("/api/payments", paymentsRouter);

connectDatabase();

export default app;
