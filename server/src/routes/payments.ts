import express from "express";
import {
  createPaymentHandler,
  getPaymentsHandler,
} from "../controllers/PaymentController";
import { check } from "express-validator";

const router = express.Router();

router.post(
  "/",
  [
    check("name", "Name length should be 2 to 20 characters").isLength({
      min: 2,
      max: 20,
    }),
    check("amount", "Amount Most be numeric").isNumeric(),
  ],
  createPaymentHandler
);
router.get("/", getPaymentsHandler);

export default router;
