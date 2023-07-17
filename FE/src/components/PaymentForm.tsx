import React, { useState } from "react";
import axios from "axios";
import { crudPayments } from "../constants";
import { Button, Input, NumberInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useBaseStore } from "../store/baseStore";

interface Payment {
  name: string;
  amount: number;
}

const PaymentForm: React.FC = () => {
  const [payment, setPayment] = useState<Payment>({
    name: "",
    amount: 0,
  });
  const setPayments = useBaseStore((state) => state.setPayments);

  const form = useForm({
    initialValues: payment,
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      amount: (value) => (value > 0 ? null : "Min number accepted is 1"),
    },
    validateInputOnBlur: true,
  });

  const handleSubmit = (payment: Payment) => {
    axios
      .post(crudPayments, payment)
      .then(async () => {
        try {
          const response = await axios.get(crudPayments);
          setPayments(response.data.payments);
        } catch (error) {
          console.error("Error fetching payments data:", error);
        }
      })
      .catch((error) => {
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
        onSubmit={form.onSubmit((values) => handleSubmit(values))}
        style={{ display: "flex", gap: "8px" }}
      >
        <TextInput
          type="text"
          placeholder="Payment Name"
          required
          {...form.getInputProps("name")}
        />
        <NumberInput
          type="number"
          placeholder="Payment Amount"
          {...form.getInputProps("amount")}
          required
          min={1}
          max={100000}
          style={{ width: "190px" }}
        />
        <Button disabled={!form.isValid()} type="submit">
          Add Payment
        </Button>
      </form>
    </div>
  );
};

export default PaymentForm;
