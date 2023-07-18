import React from "react";
import { useBaseStore } from "../store/baaseStore";
import "./GridStyleLayout.css";

const Grid: React.FC = () => {
  const grid = useBaseStore((state) => state.grid);
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
