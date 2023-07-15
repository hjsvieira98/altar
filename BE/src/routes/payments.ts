import express from "express";
import {
  createPaymentHandler,
  getPaymentsHandler,
} from "../controllers/PaymentController";

const router = express.Router();

router.post("/", createPaymentHandler);
router.get("/", getPaymentsHandler);

export default router;
