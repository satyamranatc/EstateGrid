import React from 'react'

import NavBar from "./Components/NavBar.jsx"

import State from "./Pages/State/State.jsx"



import {BrowserRouter,Routes,Route} from "react-router-dom"


export default function App() {
  return (
    <div>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<h1>Home</h1>}/>
                <Route path="/states" element={<State/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
