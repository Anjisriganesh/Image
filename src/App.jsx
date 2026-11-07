import React, { useState } from 'react'
import Images from './Components/Images'
import './App.css'
const App = () => {
  const[row,Setrow]=useState(0)
  const[col,Setcol]=useState(0)
  const[grid,setGrid]=useState(false)
  function Handlerow(e){
    Setrow(e.target.value)
  }
  function Handlecol(e){
    Setcol(e.target.value)
  }
  function display(){
    setGrid(true)
  }
  return (
    <div>
      <h1>This is Ganesh</h1>
      <input onChange={Handlerow} type='number'/> 
      <input onChange={Handlecol}type='number'/>
      <button onClick={display}>Submit</button>
      <Images row={row} col={col} grid={grid}/>
    </div>
  )
}

export default App
