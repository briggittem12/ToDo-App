import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { FaRegEdit } from 'react-icons/fa';


const TodoList = ({ tasks, setTasks, setUpdateInfo }) => {

//* buttons funcionalitys


const completeTask = (task) => {
  setTasks(
    tasks.map(item => {
      if(item.id === task.id){
        return { ...item, isCompleted: !item.isCompleted }
      }
      return item
    })
    )
  }
  

  const changeInfo = ({id}) => {
    let findTask = tasks.find(task => task.id === id)
    setUpdateInfo(findTask)
  }


  const deleteTask = ({id}) => {
    setTasks(tasks.filter(task => task.id !== id))
  }


  return (
    <section className="container">
      <article className="card d-flex shadow p-3 mb-5 bg-body rounded">

      {
        tasks.map(task => (
          
          <div key={task.id} className="card-text flex-row shadow  p-3 mb-5 rounded">
          <input onClick={() => completeTask(task)} className="form-check-input" type="checkbox" />
            <p className='t-info d-inline'>{task.title}</p>
      <div className="d-flex justify-content-end gap-3">
          <button className="btn btn-info b-save" onClick={() => changeInfo(task)}><FaRegEdit /></button> 
          <button className="btn btn-info b-save" onClick={() => deleteTask(task)}><FaTrashAlt /></button>
      </div>
        </div>
        
        ))
      }
      </article>
      
    </section>
  )
}

export default TodoList