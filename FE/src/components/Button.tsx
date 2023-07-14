import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { generateGrid } from "../contants";
import { useBaseStore } from "../store/baseStore";

const Button: React.FC = () => {
    const biasChar = useBaseStore((state)=>(state.biasChareter))
    const intervalId = useBaseStore((state)=>(state.intervalId))
    const intervalRunning = useBaseStore((state)=>(state.intervalRunning))

    const setGrid = useBaseStore((state)=>(state.setGrid))
    const setCode = useBaseStore((state)=>(state.setCode))
    const setIntervalId = useBaseStore((state)=>(state.setIntervalId))
    const setIntervalRunning = useBaseStore((state)=>(state.setIntervalRunning))

    const biasCharRef = useRef<string>()
    const fetchData = async () => {
        try {
          const response = await axios.post(generateGrid ,{biasChar:biasCharRef.current,biasPercentage:0.20});
          setGrid(response.data.grid);
          setCode(response.data.code)
        } catch (error) {
          console.error('Error fetching grid data:', error);
        }
      };

  const onClick = ()=>{
    if (intervalRunning) {
        clearInterval(intervalId!);
      } else {
        fetchData()
        const id = window.setInterval(fetchData, 2000);
        setIntervalId(id);
      }
      setIntervalRunning(!intervalRunning);
  }

  useEffect(()=>{
 
    biasCharRef.current = biasChar as string
  
},[biasChar])

    return (
      <div>
        <button onClick={() => onClick()}>  {intervalRunning ? 'Stop Generate' : 'Start Generate'}</button>
      </div>
    );
  };
  
  export default Button;