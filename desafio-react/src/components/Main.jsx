import React from "react";
import Form from "./Form";
import TaskBoard from "./Task-board";
import { useState } from "react";

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
    console.log(newTask);
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


  function editTask() {}

  return (
    <div className="register-task">
      <div className="section-title">
        <h2>Cadastrar uma Tarefa</h2>
      </div>
      <Form
        setTasks={setTasks}
        tasks={tasks}
        date={date}
        status={status}
        setDate={setDate}
        setStatus={setStatus}
        addTask={addTask}
      />
      <TaskBoard cards={cards} tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default Main;
