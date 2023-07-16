import React, { useState, useEffect } from "react";
import axios from "axios";
import PaymentsList from "../components/PaymentsList";
import PaymentForm from "../components/PaymentForm";
import { crudPayments } from "../constants";
import { Title } from "@mantine/core";

interface Payment {
  name: string;
  amount: number;
  code: string;
  grid: string[][];
}

const PaymentsPage: React.FC = () => {
  const [payments, setPayments] = useState<Payment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(crudPayments);
        setPayments(response.data.payments);
      } catch (error) {
        console.error("Error fetching payments data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Title order={2}>Payments Page</Title>
      <PaymentForm />
      <PaymentsList payments={payments} />
    </div>
  );
};

export default PaymentsPage;
