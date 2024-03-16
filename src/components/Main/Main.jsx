import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'


const Main = () => {


    const{onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

  return (
    <div className='main'>
       <div className="nav">
            <p>MY AI</p>
            <img src={assets.user_icon} alt="" />
       </div>
       <div className="main-cointainer">

            {!showResult
                ?<>
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
                </>
                :<div className='result'>
                    <div className="result-title">
                        <img src={assets.user_icon} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading
                        ?<div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                        </div>
                        
                        :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        
                        }
                       
                    </div>
                </div>
            }

         
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here'/>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input? <img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                    </div>
                </div>
                <p className="bottom-info">
                My AI may display inaccurate info, including about people, so double-check its responses. 
                </p>
            </div>
       </div>
    </div>
  )
}

export default Main