import React from 'react'
import Todo from './Todo'

const TodoList = ({ taks, setTaks }) => {

//* buttons funcionalitys

const deleteTask = ({id}) => {
  setTaks(taks.filter(todo => todo.id !== id))
}

const completeTask = (todo) => {
  setTaks(
    taks.map(item => {
      if(item.id === todo.id){
        return { ...item, isCompleted: !item.isCompleted }
      }
      return item
    })
  )
}



  return (
    <section>
      <article>
      {
        taks.map(todo => (
          <li key={todo.id}>
            <p>{todo.title}</p>
      <div>
        <button onClick={() => completeTask(todo)}>compelte</button>
        <button>update</button>
        <button onClick={() => deleteTask(todo)}>Delete</button>
      </div>
        </li>
        ))
      }
      </article>
      
    </section>
  )
}

export default TodoList