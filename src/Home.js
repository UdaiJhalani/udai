import React from 'react'
import alpha from './image/pic.png'
import Nav from './Nav'
import './Home.css'
import PropsSample from './PropsSample '
import MyApi from './MyApi'
export default function Home() {
  return (
<>
<Nav/>
<PropsSample />
<MyApi/>
<h1>Home</h1>
<img src={alpha}></img>

</>  )
}