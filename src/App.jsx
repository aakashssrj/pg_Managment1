import { useState } from 'react'
import LoginSignup from './Components/loginsignup'
import "./App.css";
// import "./App.css";






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <LoginSignup/>
    </div>
    </>
  )
}

export default App
