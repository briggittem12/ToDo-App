import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {

  const initialState = JSON.parse(localStorage.getItem('taks')) || []

  //* save, edit, delete info 
  const [capInput, setCapInput] = useState('')
  const [taks, setTaks] = useState(initialState)
  const [updateInfo, setUpdateInfo] = useState(null)


  useEffect(() => {
    localStorage.setItem('taks', JSON.stringify(taks))
  }, [taks])


 
  return (
    <>
      <header className="container">
        <h1 className="d-flex justify-content-center title">Todo's App</h1>
      </header>

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
