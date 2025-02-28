import React from 'react'
import { useState } from 'react'
const Form2 = () => {
    
     const [Username, setUsername] = useState("")
     const [Password, setPassword] = useState("")
        const handleSubmit =(e)=>{
            e.preventDefault()
            console.log({Username,Password})
        }

  return (
    <>
    
    <form  onSubmit={handleSubmit}>

        <div>
            <label htmlFor="">Full Name</label>
            <input type="text" value={Username} onChange={(e)=>setUsername(e.target.value)} />
        </div>

        <div>
            <label htmlFor="">Password</label>
            <input type="password" value={Password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button>Submit</button>

    </form>
    
    
    </>
  )
}

export default Form2