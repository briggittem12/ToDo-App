import React from 'react'


const TodoList = ({ taks, setTaks, setUpdateInfo }) => {

//* buttons funcionalitys


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
  
  const changeInfo = ({id}) => {
    let findTask = taks.find(todo => todo.id === id)
    setUpdateInfo(findTask)
  }

  const deleteTask = ({id}) => {
    setTaks(taks.filter(todo => todo.id !== id))
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
        <button onClick={() => changeInfo(todo)}>update</button>
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