import React from 'react'
import {Eye} from 'lucide-react'
import { useState } from 'react'

const Password = () => {
    const [showPassword, setShowPassword] = useState(true)

    const handleClick = () => {
        setShowPassword(!showPassword) //toggle the value of showPassword
    }
    return (
    <>
      <div className="flex">
        <label htmlFor="">Pasworddd</label>
        <input type={(showPassword) ? "password" : "text" } />
        
        {showPassword ?  <Eye onClick={handleClick}/> : <Eye onClick={handleClick}/>} //

      </div>
    
    
    </>
  )
}

export default Password