import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  
  return (
    <>  
      <Card username = "Nilesh"/> 
      <Card someObject = {{"name" : "Nilesh"}}/> 
      <Card /> 
    </>
  )
}

export default App
