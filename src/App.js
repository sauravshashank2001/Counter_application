import Button from './Component/Button';
import './App.css';
import { useState } from 'react';

const App=()=> {
  const [intervalId,setIntervalId]=useState(0);
  const [counter, setCounter]=useState(0);
  const handleStart=()=>{
    clearInterval(intervalId)
    let intervaloneId=setInterval(()=>{
       setCounter((prevValue)=>prevValue+1);
    },1000);
    setIntervalId(intervaloneId);
    

  }
  const handleStop=()=>{
    clearInterval(intervalId);
  }


  return (
    <div>
      <h3>Counter Application</h3>
      <Button  btnText="Start" btnHandler={handleStart}/>
      <p>{counter}</p>
      <Button btnText="Stop" btnHandler={handleStop}/>
    </div>
  );
}

export default App;
