import { useState } from 'react'
import './App.css'
import { Tiempo } from './Components/Tiempo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Tiempo />
    </div>
  )
}

export default App
