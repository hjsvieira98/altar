import React from "react";
import { useBaseStore } from "../store/baseStore";
import { Paper, Badge, Text, Group } from "@mantine/core";

const CodeDisplay: React.FC = () => {
  const code = useBaseStore((state) => state.code);
  const intervalRunning = useBaseStore((state) => state.intervalRunning);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "8px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Badge color={intervalRunning ? "green" : "red"} size="sm" />
        <Text>{intervalRunning ? "Live" : "Offline"}</Text>
      </div>
      <Paper
        shadow="xs"
        style={{
          width: "130px",
          border: "1px solid gray",
          gap: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Group spacing="xs">
          <Text size="sm" align="center">
            YOUR CODE:
          </Text>
          <Text size="lg" align="center" weight={700}>
            {code}
          </Text>
        </Group>
      </Paper>
    </div>
  );
};

export default CodeDisplay;
