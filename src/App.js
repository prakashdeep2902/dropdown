import { useState } from 'react';
import './App.css';
import Dropdown from './Component/Dropdown';
function App() {


  const [selected ,setSelected]=useState("");
  return (
    <>
      <Dropdown selected={selected} setSelected={setSelected} />
    </>
  );
}

export default App;
