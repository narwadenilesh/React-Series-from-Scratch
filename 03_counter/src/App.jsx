import { useState } from 'react'

import './App.css'


function App() {
  const [counter, setCounter] = useState(0);

  function AddValue(){
      setCounter(counter + 1)
  }
  
  function RemoveValue(){
      console.log("value is deceased by 1", Math.random())
      if(counter >= 1){
        setCounter(counter - 1)
      }
  }
  return (
    <>
      <h1>React from Scratch </h1>
      <h2>Counter value : {counter}</h2>
      <button
      onClick={AddValue}
      >Add Value</button>
      <br /><br />
      <button onClick={RemoveValue}>Decrease Value</button>
    </>
  )
}

export default App
