import { useState } from 'react'
import { Counter } from './component/Counter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="def">
    <Counter />
    </div>
  )
}

export default App
