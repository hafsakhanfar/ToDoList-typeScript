import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { ToDo, Input } from "../models/models";

interface Props {
  addTodo: (todo: ToDo) => void;
}

const InputField: React.FC<Props> = ({ addTodo }) => {
  const [inputs, setinputs] = useState<Input>({ task: "", assignee: "" });
  const handleAddToDo = (): void => {
    if (inputs.task && inputs.assignee) {
      const ToDo: ToDo = {
        id: new Date().getTime().toString(),
        task: inputs.task,
        assignee: inputs.assignee,
        isDone: false,
      };
      addTodo(ToDo);
      setinputs({ task: "", assignee: "" });
    } else {
      console.log("please enter some text ");
    }
  };
  return (
    <form className="input">
      <div>
        <TextField
          required
          id="outlined-basic"
          label="Task"
          variant="outlined"
          value={inputs?.task}
          onChange={(e) => setinputs({ ...inputs, task: e.target.value })}
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-basic"
          label="Assignee"
          variant="outlined"
          value={inputs?.assignee}
          onChange={(e) => setinputs({ ...inputs, assignee: e.target.value })}
        />
        <button type="submit" onClick={handleAddToDo}>
          Add
        </button>
      </div>
    </form>
  );
};

export default InputField;
