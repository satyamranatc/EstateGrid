import React,{useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "./State.css"
import axios from "axios"

export default function State() {

    let [states,setStates] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5500/api/state/list")
        .then((res) => setStates(res.data))
        .catch((err) => toast.error(err.message))
    }, [])

  return (
    
    <div id = "StatePage">
        <ToastContainer />

       <div id="StateHeader">
         <center>
            <h2>States</h2>
        </center>
       </div>

       <div id="StateGrid">
        {
            states.length > 0 ? states.map((state) => {
                return (
                    <div className="StateCard">
                        <img src={state.statePoster} alt="" />
                        <h3>{state.stateName}</h3>
                    </div>
                )
            }) : <h2>No States...</h2>
        }
       </div>
    </div>

  )
}
