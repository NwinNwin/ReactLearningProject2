import React from "react"
import earth from "../images/earth.png"

export default function Navbar(){
    return (
        <nav>
        <img className = "earth-logo" src = {earth}/>
        <h2>my travel journal.</h2>
        </nav>
    )
}