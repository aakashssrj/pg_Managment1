import React from 'react'
import './Form3.css'
import person from './person.png'
import email from './email.png'
import password from './password.png'
const Form3 = () => {
  return (
   <>
   <div className="container">
        <div className="header">
            <div className="signup">Sign Up</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src="{person}" alt="" />
                <input type="text" />
            </div>
            <div className="input">
                <img src="{email}" alt="" />
                <input type="email" />
            </div>
            <div className="input">
                <img src="{password}" alt="" />
                <input type="password" />
            </div>

            <div className="forgetpasword">Lost Password <span>Click Here</span></div>

            <div className="submitbutton">
                <div className="signin">Sign up</div>
                <div className="login">Login</div>

            </div>
            
        </div>
   
    

   </div>
   
   
   
   </>
  )
}

export default Form3