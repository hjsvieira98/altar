import axios from "axios";
import { useEffect, useRef } from "react";
import { generateGrid } from "../constants";
import { useBaseStore } from "../store/baseStore";
import { Button } from "@mantine/core";

const ButtonStartGenerate: React.FC = () => {
  const biasChar = useBaseStore((state) => state.biasCharacter);
  const intervalRunning = useBaseStore((state) => state.intervalRunning);

  const setGrid = useBaseStore((state) => state.setGrid);
  const setCode = useBaseStore((state) => state.setCode);
  const setIntervalRunning = useBaseStore((state) => state.setIntervalRunning);

  const intervalId = useRef<number>();

  const biasCharRef = useRef<string>();
  const fetchData = async () => {
    try {
      const response = await axios.post(generateGrid, {
        biasChar: biasCharRef.current,
        biasPercentage: biasCharRef.current && 0.2,
      });
      setGrid(response.data.grid);
      setCode(response.data.code);
    } catch (error) {
      console.error("Error fetching grid data:", error);
    }
  };

  const onClick = () => {
    if (intervalRunning) {
      clearInterval(intervalId.current);
    } else {
      fetchData();
      const id = window.setInterval(fetchData, 2000);
      intervalId.current = id;
    }
    setIntervalRunning(!intervalRunning);
  };

  useEffect(() => {
    biasCharRef.current = biasChar as string;
  }, [biasChar]);

  useEffect(() => {
    return () => {
      setIntervalRunning(false);
      clearInterval(intervalId.current);
    };
  }, []);

  return (
    <Button onClick={() => onClick()} type="submit">
      {intervalRunning ? "Stop Generate" : "Start Generate"}
    </Button>
  );
};

export default ButtonStartGenerate;
