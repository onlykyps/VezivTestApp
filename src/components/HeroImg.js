import "./HeroImgStyles.css"

import React from 'react'
import IntroImg from "../assets/doSomethingGreat.jpg"
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into_img"
                src={IntroImg} alt="ItroImg"/>
        </div>
        <div className="content">
            <p>Hi I am a freelancer</p>
            <h1>React Dev</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn-light">Contact</Link>
            </div>

        </div>
    </div>
  )
}

export default HeroImg