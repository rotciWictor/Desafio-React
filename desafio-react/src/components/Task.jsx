import React from 'react';
import {BsTrash2} from 'react-icons/bs';
import {VscEdit} from 'react-icons/vsc';

function Task(props) {
    let warning = "oi"
    let today = new Date
    if(props.date > today){
        warning = " Tarefa Expirada"
    }

  return (
      <div className='new-task'>
          <label>Descrição:</label>
          <span>{props.task}</span>
          <label>Prazo:</label>
          <div>
          <span>'{props.date} + {warning}'</span>
          </div>
          <div className='icons'>
            <VscEdit/>
            <BsTrash2 onClick={props.deleteTask()}/>  
          </div>
      </div>
  );
}

export default Task;