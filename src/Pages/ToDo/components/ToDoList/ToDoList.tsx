import React from "react";
import { ToDo } from "../../types";
import SingleToDo from "../SingleToDo/SingleToDo";
import styles from "./styles";

interface ToDoListProps {
  todos: ToDo[];
  setToDos: (todos: ToDo[]) => void;
}
const ToDoList: React.FC<ToDoListProps> = ({ todos, setToDos }) => {
  const completeTodo = (id: string): void => {
    const mapped = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setToDos(mapped);
  };

  const deleteTodo = (id: string) => {
    const deleted = todos.filter((task) => task.id !== id);
    setToDos(deleted);
  };

  const editTodo = (newTodo: ToDo): void => {
    const updatedTodos = todos.map((todo) => (todo.id === newTodo.id ? newTodo : todo));
    setToDos(updatedTodos);
  };

  return (
    <div style={styles.list}>
      {todos.map((todo) => {
        return (
          <SingleToDo
            key={todo.id}
            todo={todo}
            onCompleteTodo={completeTodo}
            onDeleteTodo={deleteTodo}
            onEditTodo={editTodo}
          />
        );
      })}
    </div>
  );
};

export default ToDoList;
