import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {

  const initialState = JSON.parse(localStorage.getItem('tasks')) || []

  //* save, edit, delete info 
  const [capInput, setCapInput] = useState('')
  const [tasks, setTasks] = useState(initialState)
  const [updateInfo, setUpdateInfo] = useState(null)


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])


 
  return (
    <>
      <header className="container">
        <h1 className="d-flex justify-content-center title">Todo's App</h1>
      </header>

      <TodoForm 
      tasks={tasks} 
      setTasks={setTasks} 
      capInput={capInput} 
      setCapInput={setCapInput}
      updateInfo={updateInfo}
      setUpdateInfo={setUpdateInfo}
      />

      <TodoList
      tasks={tasks} 
      setTasks={setTasks} 
      setUpdateInfo={setUpdateInfo}
      />

    </>
  )
}

export default App
