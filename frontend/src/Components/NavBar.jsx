import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

export default function NavBar() {
  return (
    <nav>
        <h2>EstateGrid</h2>
        <ul>
            <li><Link to={"/"} >Home</Link></li>
            <li><Link to={"/states"} >States</Link></li>
        </ul>
    </nav>
  )
}
