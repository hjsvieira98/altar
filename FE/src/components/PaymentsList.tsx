import React from 'react';

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
    <div>
      <h2>Payments List</h2>
      {payments.map((payment, index) => (
        <div key={index}>
          <h3>Payment #{index + 1}</h3>
          <p>Name: {payment.name}</p>
          <p>Amount: {payment.amount}</p>
          <p>Code: {payment.code}</p>
          <div>
            <h4>Grid:</h4>
            {payment.grid.map((row, rowIndex) => (
              <div key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <span key={colIndex}>{cell}</span>
                ))}
              </div>
            ))}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default PaymentsList;