import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [taks, setTaks] = useState([])
  const [capInput, setCapInput] = useState('')
  const [updateInfo, setUpdateInfo] = useState(null)



  return (
    <>

      <h1>Todo's App</h1>

      <TodoForm 
      taks={taks} 
      setTaks={setTaks} 
      capInput={capInput} 
      setCapInput={setCapInput}
      updateInfo={updateInfo}
      setUpdateInfo={setUpdateInfo}
      />

      <TodoList
      taks={taks} 
      setTaks={setTaks} 
      setUpdateInfo={setUpdateInfo}
      />

    </>
  )
}

export default App
