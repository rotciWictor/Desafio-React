import React from 'react';
import * as S from "./style";


function Form(props) {
  return (
    <S.form>
        <S.inputs>
            <input
              name="new-task"
              placeholder="Nova Tarefa"
              value={props.tasks}
              onInput={(event) => props.setTasks(event.target.value)}
            />
            <input
              type="datetime-local"
              value={props.date}
              onInput={(event) => props.setDate(event.target.value)}
            />
            <select
              value={props.status}
              onInput={(event) => props.setStatus(event.target.value)}
            >
              <option value="">Escolha uma opção</option>
              <option value="todo">A fazer</option>
              <option value="doing">Fazendo</option>
              <option value="completed">Finalizado</option>
            </select>
        </S.inputs>
        <button type="submit" onClick={props.addTask}>
          Adicionar Tarefa
        </button>
    </S.form>
  );
}

export default Form;