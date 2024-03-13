import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'


const Main = () => {
  return (
    <div className='main'>
       <div className="nav">
            <p>MY AI</p>
            <img src={assets.user_icon} alt="" />
       </div>
       <div className="main-cointainer">
            <div className="greet">
                <p><span>Hello, David</span></p>
                <p>How can i help you today </p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Describe your ideal environment as a developer</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>How would you address a project delay or error with your supervisor or client? </p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>What are some of your strengths and weaknesses as a developer?</p>
                    <img src={assets.code_icon} alt="" />
                </div>
                <div className="card">
                    <p>What do you do outside of work hours to make yourself a better developer?</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
            </div>
       </div>
    </div>
  )
}

export default Main