import { useEffect, useState } from 'react'

const TodoForm = () => {

   const [capInput, setCapInput] = useState('')


   const capSubmit = e => {
     e.preventDefault()
      
      
   }


  console.log(capInput)
  return (
    <form onSubmit={capSubmit}>
      <input type="text" id='todo' placeholder="Add your task"/>
      <button>Save</button>
    </form>
  )
}

export default TodoForm