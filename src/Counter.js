import React, { useState } from 'react'



export default function Counter() {
    const[num,setNum]=useState(5);
    function add() {
        setNum(num+1)
        }
        function sub() {
            setNum(num-1)
            
        }
  return (
    <>
    <button onClick={add}> Add</button>
    <div>{num}</div>
    
    <button onClick={sub}> Sub</button>

    </>
  )
}
