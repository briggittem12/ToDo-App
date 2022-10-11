import React from 'react';
import { FaTrashAlt } from 'react-icons/fa'
import { FaRegEdit } from 'react-icons/fa'


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
    <section className="container">
      <article className="card d-flex shadow p-3 mb-5 bg-body rounded">

      {
        taks.map(todo => (
          
          <li key={todo.id} className="card-text flex-row shadow  p-3 mb-5 rounded">
          <input onClick={() => completeTask(todo)} className="form-check-input" type="checkbox"/>
            <p className='t-info d-inline'>{todo.title}</p>
      <div className="d-flex justify-content-end gap-3">
          <button className="btn btn-info b-save" onClick={() => changeInfo(todo)}><FaRegEdit /></button> 
          <button className="btn btn-info b-save" onClick={() => deleteTask(todo)}><FaTrashAlt /></button>
      </div>
        </li>
    
        ))
      }
      </article>
      
    </section>
  )
}

export default TodoList