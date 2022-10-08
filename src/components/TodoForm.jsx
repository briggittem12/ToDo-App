import { useState } from 'react'

const TodoForm = ({ taks, setTaks, capInput, setCapInput }) => {


   const capSubmit = e => {
    e.preventDefault(); 
      setTaks([
      ...taks, {
        id: crypto.randomUUID(),
        title: capInput,
        isCompleted: false
        }
      ])
      setCapInput('')
   }

   
   const changeSubmit = e => {
      setCapInput(e.target.value);
   }



  return (
    <section>
      <form onSubmit={capSubmit}>

        <input 
        onChange={changeSubmit} 
        value={capInput}
        type="text" 
        id='todo' 
        placeholder="Add your task"/>

        <button>Save</button>

      </form>
    </section>
      
  )
}

export default TodoForm