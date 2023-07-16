import React, { useState } from "react";
import axios from "axios";
import { crudPayments } from "../constants";
import { Button, Input } from "@mantine/core";
import { useForm } from "@mantine/form";

interface Payment {
  name: string;
  amount: number;
}

const PaymentForm: React.FC = () => {
  const [payment, setPayment] = useState<Payment>({
    name: "",
    amount: 0,
  });
  const form = useForm({ initialValues: payment });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setPayment({ ...payment, [name]: value });
  };

  const handleSubmit = () => {
    axios.post(crudPayments, payment).catch((error) => {
      console.error("Error adding payment:", error);
    });

    form.reset();
  };

  return (
    <div
      style={{
        marginTop: "16px",
        display: "flex",
        justifyContent: "start",
        maxWidth: "100%",
      }}
    >
      <form
        onSubmit={form.onSubmit(handleSubmit)}
        style={{ display: "flex", gap: "8px" }}
      >
        <Input
          type="text"
          placeholder="Payment Name"
          name="name"
          value={payment.name}
          onChange={handleInputChange}
          required
        />
        <Input
          type="number"
          placeholder="Payment Amount"
          name="amount"
          value={payment.amount}
          onChange={handleInputChange}
          required
        />
        <Button type="submit">Add Payment</Button>
      </form>
    </div>
  );
};

export default PaymentForm;
