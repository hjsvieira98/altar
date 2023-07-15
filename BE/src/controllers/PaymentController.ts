import { Request, Response } from "express";
import Payment, { IPayment } from "../models/Payment";
import { calculateCode } from "../utils/code";
import { generateGrid } from "../utils/grid";

export const createPaymentHandler = async (
  req: Request,
  res: Response,
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

    await payment.save();

    res.status(201).json({ payment });
  } catch (error) {
    console.error("Error creating payment:", error);
    res.status(500).json({ error: "Failed to create payment" });
  }
};

export const getPaymentsHandler = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  try {
    const payments = await Payment.find();
    res.json({ payments });
  } catch (error) {
    console.error("Error fetching payments:", error);
    res.status(500).json({ error: "Failed to fetch payments" });
  }
};
