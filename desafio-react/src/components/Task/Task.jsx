import React from "react";
import { BsTrash2 } from "react-icons/bs";
import { VscEdit } from "react-icons/vsc";
import * as S from "./style"

function Task(props) {
  let warning = "";
  let deadline = new Date(props.date)
  let today = new Date();
  if (deadline < today) {
    warning = " Tarefa Expirada";
  }

  return (
    <S.tasks>
        <label>Descrição:</label>
        <p>{props.task}</p>
        <label>Prazo:</label>
        <div>
          <p>
            {props.date} {warning}
          </p>
        </div>
        <S.icons>
            <VscEdit onClick={() => props.editTask(props.index)} />
            <BsTrash2 onClick={() => props.deleteTask(props.index)} />
        </S.icons>
    </S.tasks>
  );
}

export default Task;
