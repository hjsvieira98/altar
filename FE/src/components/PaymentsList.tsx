import React from "react";
import { Title, Table } from "@mantine/core";

export interface Payment {
  name: string;
  amount: number;
  code: string;
  grid: string[][];
}

interface PaymentsListProps {
  payments: Payment[];
}

const PaymentsList: React.FC<PaymentsListProps> = ({ payments }) => {
  return (
    <div style={{ marginTop: "16px" }}>
      <Title order={2}>Payments List</Title>
      <Table striped style={{ marginTop: "16px" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Code</th>
            <th>Grid</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{payment.name}</td>
              <td>{payment.amount}</td>
              <td>{payment.code}</td>
              <td>
                <ul>
                  {payment.grid.map((row, rowIndex) => (
                    <li key={rowIndex}>{row.join(" ")}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PaymentsList;
