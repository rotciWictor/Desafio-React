import React from 'react';

// import { Container } from './styles';

function Form(props) {
  return (
    <section className='form'>
    <div className='inputs'>
        <input name="new-task" placeholder='Nova Tarefa' value={props.tasks} onInput={(event) => props.setTasks(event.target.value)}/>
        <input type="date" value={props.date} onInput={(event) => props.setDate(event.target.value)}/>
        <select value={props.status} onInput={(event) => props.setStatus(event.target.value)}>
            <option value=""></option>
            <option value="todo">A fazer</option>
            <option value="doing">Fazendo</option>
            <option value="completed">Completo</option>
        </select>
    </div>
    <button type="submit" onClick={props.addTask}>Adicionar Tarefa</button>
</section>
  );
}

export default Form;