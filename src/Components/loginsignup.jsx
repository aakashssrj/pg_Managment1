import React from 'react'
import email from '../assets/email.png'
import pss from '../assets/pss.png'
import user from '../assets/user.png'
import { useState } from 'react'
import './loginsignup.css';



const LoginSignup = () => {

  const [data, setdata] = useState(0)
    console.log({data})
  const handle = ()=>{
    setdata(data+1);
  }

  return (
    <>
    
    <button onClick={handle}>Click Here {data}</button>
    
    </>
    // <div>
    //   <div className="container">
    //     <div className="header">
    //       <div className="text">{action}</div>
    //       <div className="underline"></div>
    //     </div>

    //     <div className="inputs">
    //       <div className="input">
    //         <img src={user} alt="" />
    //         <input type="text" />
    //       </div>
    //       <div className="input">
    //         <img src={email} alt="" />
    //         <input type="text" />
    //       </div>
    //       <div className="input">
    //         <img src={pss} alt="" />
    //         <input type="text" />
    //       </div>
    //     </div>

    //     <div className="forgot-password">Lost Password <span>Click here</span></div>

    //     <div className="submit-container">
    //       <div className={submit==={action} ? console.log ("You are Signing in") : console.log("You are Logged in")}> Sign Up</div>
    //       <div className={submit=={action} ? console.log ("You are Signing in") : console.log("You are Logged in") }>Login</div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default LoginSignup