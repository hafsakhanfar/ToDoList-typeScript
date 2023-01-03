import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { ToDo } from "../../types";
import styles from "./styles";

interface InputFieldProps {
  addTodo: (todo: ToDo) => void;
}

const initialFormState: ToDo = { id: "", task: "", assignee: "", isDone: false };

const InputField: React.FC<InputFieldProps> = ({ addTodo }) => {
  const [newToDo, setNewToDo] = useState<ToDo>(initialFormState);

  const handleAddToDo = (): void => {
    if (newToDo.task && newToDo.assignee) {
      addTodo({ ...newToDo, id: new Date().getTime().toString() });
      setNewToDo(initialFormState);
    }
  };
  return (
    <form style={styles.input}>
      <div>
        <TextField
          required
          id="outlined-basic"
          label="Task"
          variant="outlined"
          value={newToDo?.task}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewToDo(prevValue => ({ ...prevValue, task: e.target.value }))}
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-basic"
          label="Assignee"
          variant="outlined"
          value={newToDo?.assignee}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewToDo(prevValue => ({ ...prevValue, assignee: e.target.value }))}
        />
        <button style={styles.button} type="submit" onClick={handleAddToDo}>
          Add
        </button>
      </div>
    </form>
  );
};

export default InputField;
