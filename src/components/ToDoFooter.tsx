import React from "react";
import { ToDo } from "../models/models";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
interface Props {
  todos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const TodoFooter: React.FC<Props> = ({ todos, setToDos }) => {
  return (
    <div className="Footer">
      <span> {todos.length} todos</span>
      <DeleteSweepIcon
        fontSize="small"
        onClick={() => {
          setToDos([]);
        }}
      />
    </div>
  );
};

export default TodoFooter;
