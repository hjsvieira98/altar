import mongoose, { Schema, Document } from "mongoose";

export interface IPayment extends Document {
  name: string;
  amount: number;
  code: string;
  grid: string[][];
}

const PaymentSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    code: { type: String, required: true },
    grid: { type: [[String]], required: true },
  },
  { timestamps: true },
);

export default mongoose.model<IPayment>("Payment", PaymentSchema);
