import React from "react";
import { BsTrash2 } from "react-icons/bs";
import { VscEdit } from "react-icons/vsc";

function Task(props) {
  let warning = "";
  let deadline = new Date(props.date)
  let today = new Date();
  if (deadline < today) {
    warning = " Tarefa Expirada";
  }

  return (
    <div className="new-task">
      <label>Descrição:</label>
      <span>{props.task}</span>
      <label>Prazo:</label>
      <div>
        <span>
          {props.date} {warning}
        </span>
      </div>
      <div className="icons">
        <VscEdit onClick={() => props.editTask(props.index)}/>
        <BsTrash2 onClick={() => props.deleteTask(props.index)} />
      </div>
    </div>
  );
}

export default Task;
