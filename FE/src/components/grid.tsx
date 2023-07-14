import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { generateGrid } from '../contants';
import { useBaseStore } from '../store/baseStore';
import './gridStyle.css'; 

const Grid: React.FC = () => {
  const grid = useBaseStore((state)=>(state.grid))
  return (
    <div className="grid-container">
    {grid?.map((row, rowIndex) => (
      <React.Fragment key={rowIndex}>
        {row.map((cell, colIndex) => (
          <span className="grid-cell" key={colIndex}>
            {cell}
          </span>
        ))}
      </React.Fragment>
    ))}
  </div>
  );
};

export default Grid;