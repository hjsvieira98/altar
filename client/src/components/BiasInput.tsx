import React, { useEffect, useState } from "react";
import axios from "axios";
import { generateGrid } from "../constants";
import { useBaseStore } from "../store/baaseStore";
import { Input } from "@mantine/core";

const BiasInput: React.FC = () => {
  const biasCharacter = useBaseStore((state) => state.biasCharacter);
  const setBiasCharacter = useBaseStore((state) => state.setBiasCharacter);
  const [disabled, setDisabled] = useState<boolean>(false);
  useEffect(() => {
    if (biasCharacter) {
      setDisabled(true);

      const timeout = setTimeout(() => {
        setDisabled(false);
      }, 4000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [biasCharacter]);

  const handleBiasChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value.length === 0) {
      setBiasCharacter(value);
      return;
    }
    const letters = /^[A-Za-z]+$/;
    if (value.match(letters) || value === "") {
      if (value && value.length === 1) {
        setBiasCharacter(value);
        axios.post(generateGrid, { bias: value }).catch((error) => {
          console.error("Error setting bias:", error);
        });
      } else {
        alert("Max characters permitted is 1");
      }
    } else {
      alert("Please enter a valid character");
    }
  };

  return (
    <Input
      type="text"
      placeholder="Enter bias character (a-z)"
      name="biasInput"
      value={biasCharacter}
      onChange={handleBiasChange}
      disabled={disabled}
    />
  );
};

export default BiasInput;
