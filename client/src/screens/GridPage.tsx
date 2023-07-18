import React from "react";
import Grid from "../components/GridLayout";
import CodeDisplay from "../components/CodeDisplay";
import BiasInput from "../components/BiasInput";
import Button from "../components/Button";
import { Title } from "@mantine/core";

const GridPage: React.FC = () => {
  return (
    <div>
      <Title style={{ marginBottom: "24px" }} order={2}>
        Payments Page
      </Title>
      <div style={{ gap: "16px", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <BiasInput />
          <Button />
        </div>
        <Grid />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CodeDisplay />
        </div>
      </div>
    </div>
  );
};

export default GridPage;
