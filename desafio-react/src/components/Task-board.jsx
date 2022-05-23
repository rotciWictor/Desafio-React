import React from "react";
import Task from "./Task";

// import { Container } from './styles';

function TaskBoard(props) {

    let cards = props.cards.forEach((card,i) => {
        card.index = i;        
    });
  

  return (
    <section className="task-board">
      <div className="section-title">
        <h2>Quadro de Tarefas</h2>
      </div>
      <div className="boards">
        <div className="board">
          <div className="board-header-todo">A Fazer</div>
          <div className="todo-tasks">
          {props.cards
            .filter((card) => card.status === "todo")
            .map((card) => (
              <Task key={card.index} index={card.index} task={card.tasks} date={card.date} deleteTask={props.deleteTask} editTask={props.editTask}/>
            ))}
        </div>
        </div>
        <div className="board">
          <div className="board-header-doing">Fazendo</div>
          <div className="doing-tasks">
          {props.cards
            .filter((card) => card.status === "doing")
            .map((card) => (
              <Task key={card.index} task={card.tasks} date={card.date} index={card.index} deleteTask={props.deleteTask} editTask={props.editTask}/>
            ))}
            </div>
        </div>
        <div className="board">
          <div className="board-header-completed">Completo</div>
          <div className="completed-tasks">
          {props.cards
            .filter((card) => card.status === "completed")
            .map((card) => (
              <Task key={card.index} task={card.tasks} date={card.date} index={card.index} deleteTask={props.deleteTask} editTask={props.editTask}/>
            ))}
        </div>
        </div>
      </div>
    </section>
  );
}

export default TaskBoard;
