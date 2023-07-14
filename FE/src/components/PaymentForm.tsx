import React, { useState } from 'react';
import axios from 'axios';
import { generatePayments } from '../contants';

interface Payment {
  name: string;
  amount: number;
}

const PaymentForm: React.FC = () => {
  const [payment, setPayment] = useState<Payment>({
    name: '',
    amount: 0,
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setPayment((prevPayment) => ({
      ...prevPayment,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    axios.post(generatePayments, payment).catch((error) => {
      console.error('Error adding payment:', error);
    });

    setPayment({ name: '', amount: 0 });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Payment Name"
          name="name"
          value={payment.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          placeholder="Payment Amount"
          name="amount"
          value={payment.amount}
          onChange={handleInputChange}
        />
        <button type="submit">Add Payment</button>
      </form>
    </div>
  );
};

export default PaymentForm;