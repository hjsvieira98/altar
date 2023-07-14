import React from 'react';
import Grid from '../components/grid';
import CodeDisplay from '../components/CodeDisplay';
import BiasInput from '../components/BiasInput';
import Button from '../components/Button';

const GridPage: React.FC = () => {
  return (
    <div>
      <h1>Grid Page</h1>
      <div style={{gap:'16px', display:'flex', flexDirection:'column'}}>
      <div style={{display:'flex' , justifyContent:'space-between'}}>
      <BiasInput />
      <Button/>
      </div>
      <Grid />
      <div style={{display:'flex' , justifyContent:'center'}}>
      <CodeDisplay />
      </div>
      </div>
    </div>
  );
};

export default GridPage;