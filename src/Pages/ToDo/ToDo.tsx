import React, { useEffect, useState } from "react";
import InputField from "./components/ToDoForm/ToDoForm";
import TodoFooter from "./components/ToDoFooter/ToDoFooter";
import ToDoList from "./components/ToDoList/ToDoList";
import { ToDo } from "./types";
import styles from "./styles";

const Todo: React.FC = () => {
  const [todos, setToDos] = useState<Array<ToDo>>([]);

  const storage = localStorage.getItem("localTasks");

  useEffect(() => {
    const localTodos = storage ? JSON.parse(storage) : [];
    setToDos(localTodos);
  }, []);

  const handleChangeToDos = (todos: ToDo[]) => {
    setToDos(todos);
    localStorage.setItem("localTasks", JSON.stringify(todos));
  }

  const addTodo = (todo: ToDo): void => {
    handleChangeToDos([...todos, todo]);
  };

  return (
    <div style={styles.main}>
      <h1 style={{ color: "#484646", textAlign: "center", margin: "15px" }}>
        TO DO APP
      </h1>
      <InputField addTodo={addTodo} />
      <ToDoList todos={todos} setToDos={handleChangeToDos} />
      <TodoFooter todos={todos} setToDos={handleChangeToDos} />
    </div>
  );
};

export default Todo;
