import React from 'react';
import { useEffect } from 'react';
import { BiSend } from 'react-icons/bi'


const TodoForm = ({ taks, setTaks, capInput, setCapInput, updateInfo, setUpdateInfo }) => {

  //? funtion for edit todo content
  const updateTask = (id, title, isCompleted) => {
    const newTask = taks.map(todo => todo.id === id ? {id, title, isCompleted} : todo);
    setTaks(newTask);
    setUpdateInfo("");
  }

  //? ejecutamos el cambio 
  useEffect(() => {
    if (updateInfo){
      setCapInput(updateInfo.title)
    } else {
      setCapInput('')
    }
  }, [setCapInput, updateInfo]);


  //? capture data for default
   const capSubmit = e => {
    e.preventDefault(); 
      if(!updateInfo){
        setTaks([
        ...taks, {
          id: crypto.randomUUID(),
          title: capInput,
          isCompleted: false
          }
        ])
        setCapInput('')
      } else {
        updateTask(capInput, updateInfo.id, updateInfo.isCompleted)
      }
   }

   //? save change
   const changeSubmit = e => {
      setCapInput(e.target.value);
   }



  return (
    <section className="container">
      <form onSubmit={capSubmit} className="input-group mb-3">

        <input 
        onChange={changeSubmit} 
        value={capInput}
        type="text" 
        id='todo' 
        placeholder="Add your task"
        className="form-control"/>

        <button className="btn btn-outline-danger b-save"><BiSend /></button>

      </form>
    </section>
      
  )
}

export default TodoForm