import React from "react";
import Form from "../Forms/Form";
import TaskBoard from "../Task-board/TaskBoard";
import { useState } from "react";
import * as S from "./style";

function Main() {
  const [tasks, setTasks] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  const [cards, setCards] = useState([]);

  function addTask(event) {
    const newTask = {
      tasks: tasks,
      date: date,
      status: status,
    };

    let allCards = cards;
    allCards.push(newTask);
    setCards(allCards);

    clearInput();
  }

  function clearInput() {
    setTasks("");
    setDate("");
    setStatus("");
  }

  function deleteTask(index) {
    let removeTask = cards.filter((task, i) => i !== index);
    setCards(removeTask);
  }

  function editTask(index) {
    setTasks(cards[index].tasks);
    setDate(cards[index].date);
    setStatus(cards[index].status);
    deleteTask(index);
  }

  return (
    <S.main>
      <S.sectionTitle>
        <S.title>Cadastrar uma Tarefa</S.title>
      </S.sectionTitle>
      <Form
        setTasks={setTasks}
        tasks={tasks}
        date={date}
        status={status}
        setDate={setDate}
        setStatus={setStatus}
        addTask={addTask}
      />
      <S.taskBoard>
        <S.sectionTitle>
          <S.title>Quadro de Tarefas</S.title>
        </S.sectionTitle>
        <S.boards>
          <TaskBoard
            cards={cards}
            deleteTask={deleteTask}
            editTask={editTask}
            status="todo"
            title="A Fazer"
            background="red"
            colorTaskBackground="red"
            colorTaskBorder="red"
          />
          <TaskBoard
            cards={cards}
            deleteTask={deleteTask}
            editTask={editTask}
            status="doing"
            title="Fazendo"
            colorHeader="#DFD735"
            colorTaskBackground="#FEF9CE"
            colorTaskBorder="#DFD735"
          />
          <TaskBoard
            cards={cards}
            deleteTask={deleteTask}
            editTask={editTask}
            status="completed"
            title="Finalizado"
            colorHeader="#6EE256"
            colorTaskBackground="#DFFAE8"
            colorTaskBorder="#6EE256"
          />
        </S.boards>
      </S.taskBoard>
    </S.main>
  );
}

export default Main;
