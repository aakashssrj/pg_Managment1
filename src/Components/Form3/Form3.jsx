import React from 'react'
import './Form3.css'
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
                <img src="{}" alt="" />
                <input type="text" />
            </div>
            <div className="input">
                <img src="{}" alt="" />
                <input type="email" />
            </div>
            <div className="input">
                <img src="{}" alt="" />
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