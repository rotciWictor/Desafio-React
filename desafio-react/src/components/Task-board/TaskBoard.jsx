import React from "react";
import Task from "../Task/Task" 
import * as S from "./style"; 

// import { Container } from './styles';

function TaskBoard(props) {
  let cards = props.cards.forEach((card, i) => {
    card.index = i;
  });

  return (

      <S.board>
        <S.header>{props.title}</S.header>
        <S.tasks>
          {props.cards
            .filter((card) => card.status === props.status)
            .map((card) => (
              <Task
                key={card.index}
                index={card.index}
                task={card.tasks}
                date={card.date}
                deleteTask={props.deleteTask}
                editTask={props.editTask}
              />
            ))}
        </S.tasks>
      </S.board>

  );
}

export default TaskBoard;
