import { Request, Response } from "express";
import Payment, { IPayment } from "../models/Payment";
import { calculateCode } from "../utils/code";
import { generateGrid } from "../utils/grid";
import { validationResult } from "express-validator";

export const createPaymentHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, amount } = req.body;
    const grid = generateGrid();
    const code = calculateCode(grid);

    const payment: IPayment = new Payment({
      name,
      amount,
      code,
      grid,
    });
    const errors = validationResult(req);

    // If some error occurs, then this
    // block of code will run
    if (!errors.isEmpty()) {
      res.json(errors);
    }
    const validationErrors = payment.validateSync();
    if (validationErrors) {
      res.status(400).json({ error: "Invalid payment data", validationErrors });
    } else if (!errors.isEmpty()) {
      res.status(400).json({ error: errors });
    } else {
      await payment.save();
      res.status(200).json({ payment });
    }
  } catch (error) {
    console.error("Error creating payment:", error);
    res.status(500).json({ error: "Failed to create payment" });
  }
};

export const getPaymentsHandler = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const payments = await Payment.find();
    res.json({ payments });
  } catch (error) {
    console.error("Error fetching payments:", error);
    res.status(500).json({ error: "Failed to fetch payments" });
  }
};
