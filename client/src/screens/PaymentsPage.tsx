import React, { useEffect } from "react";
import axios from "axios";
import PaymentsList from "../components/PaymentsList";
import PaymentForm from "../components/PaymentForm";
import { crudPayments } from "../constants";
import { Title } from "@mantine/core";
import { useBaseStore } from "../store/BaseStore";

interface Payment {
  name: string;
  amount: number;
  code: string;
  grid: string[][];
}

const PaymentsPage: React.FC = () => {
  const payments = useBaseStore((state) => state.payments);
  const setPayments = useBaseStore((state) => state.setPayments);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Title order={2}>Payments Page</Title>
      <PaymentForm />
      <PaymentsList payments={payments as Payment[]} />
    </div>
  );
};

export default PaymentsPage;
