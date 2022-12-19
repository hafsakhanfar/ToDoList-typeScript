import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import TodoFooter from "./ToDoFooter";
import ToDoList from "./ToDoList";
import { ToDo } from "../models/models";

const Todo: React.FC = () => {
  const [todos, setToDos] = useState<Array<ToDo>>([]);

  const storage = localStorage.getItem("localTasks");

  useEffect(() => {
    const localTodos = storage ? JSON.parse(storage) : [];
    setToDos(localTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("localTasks", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo: ToDo): void => {
    localStorage.setItem("localTasks", JSON.stringify([...todos, todo]));
    setToDos([...todos, todo]);
  };

  return (
    <div className="main">
      <h1 style={{ color: "#484646" }}>TO DO APP</h1>
      <InputField addTodo={addTodo} />
      <ToDoList todos={todos} setToDos={setToDos} />
      <TodoFooter todos={todos} setToDos={setToDos} />
    </div>
  );
};

export default Todo;
