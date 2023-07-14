import React from 'react';
import axios from 'axios';
import { generateGrid } from '../contants';
import { useBaseStore } from '../store/baseStore';

const BiasInput: React.FC = () => {
  const biasChareter = useBaseStore((state)=>(state.biasChareter))
  const setBiasChareter = useBaseStore((state)=>(state.setBiasChareter))

  const handleBiasChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    
    setBiasChareter(value);

    if (value && value.length === 1) {
      axios.post(generateGrid, { bias: value }).catch((error) => {
        console.error('Error setting bias:', error);
      });
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter bias character (a-z)"
        value={biasChareter}
        onChange={handleBiasChange}
      />
    </div>
  );
};

export default BiasInput;