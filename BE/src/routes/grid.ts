import express from "express";
import { generateGridHandler } from "../controllers/GridController";

const router = express.Router();

router.post("/", generateGridHandler);

export default router;
