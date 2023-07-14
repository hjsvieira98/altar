import React, { useEffect } from 'react';
import { useBaseStore } from '../store/baseStore';

const CodeDisplay: React.FC = () => {
  const code = useBaseStore((state)=>(state.code))
  const intervalRunning = useBaseStore((state)=>(state.intervalRunning))

  return (
    <div style={{display:'flex' , flexDirection:'column' , justifyContent:'center', width:'130px' , alignItems:'center', gap:'16px'}}>
     <div style={{display:'flex', gap:'8px',justifyContent:'center', alignItems:'center'}}>
        <div style={{backgroundColor:intervalRunning?'green':'red' , borderRadius:'10px',height:'10px', width:'10px'}}></div>
        <span style={{textAlign:'center'}}>{intervalRunning?'Live':'Offline'}</span>
      </div>
      <div style={{padding:'32px' , width:'130px', border:'1px solid gray' , display:'flex', justifyContent:'center'}}>
      <span style={{textAlign:'center'}}>{code}</span>
    </div>
    </div>
    
  );
};

export default CodeDisplay;