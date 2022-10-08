import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Todo's App</h1>
      <TodoForm/>
    </div>
  )
}

export default App
