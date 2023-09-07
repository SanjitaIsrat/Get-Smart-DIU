//import { useState } from 'react'
import bgImg from './images/searchingTeam.jpg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>Welcome to <span>Get Smart-DIU</span></h1>
      </div>
      
      <div className="card">
        <h3>Are You <span>?</span></h3>
        <button onClick="">Teacher</button>
        <button onClick="">Student</button>
        <button onClick="">Admin</button>
        <div>
          <img src={bgImg} className="img" alt="bg-img" />
        </div>
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      
    </>
  )
}

export default App
