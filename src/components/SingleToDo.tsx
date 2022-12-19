import React, { useState } from "react";
import Modal from "../Modal";
import { ToDo, Input } from "../models/models";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";

interface todo {
  todo: ToDo;
  deleteTodo: (id: string) => void;
  completeTodo: (id: string) => void;
  editTodo: (id: string, newTodo: ToDo) => void;
}
const SingleToDo: React.FC<todo> = ({
  todo,
  deleteTodo,
  completeTodo,
  editTodo,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [inputs, setinputs] = useState<Input>({
    task: todo.task,
    assignee: todo.assignee,
  });

  const handelDoneClick = () => {
    completeTodo(todo.id);
  };

  const handelDeleteclick = () => {
    deleteTodo(todo.id);
  };
  const handelEditclick = () => {
    editTodo(todo.id, {
      ...todo,
      task: inputs.task,
      assignee: inputs.assignee,
    });
    setToggleEdit(!toggleEdit);
  };
  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="toDo">
      {toggleEdit ? (
        <div className="task">
          <TextField
            id="standard-basic"
            variant="standard"
            value={inputs?.task || ""}
            onChange={(e) => setinputs({ ...inputs, task: e.target.value })}
          />
          <TextField
            id="standard-basic"
            variant="standard"
            value={inputs?.assignee || ""}
            onChange={(e) => setinputs({ ...inputs, assignee: e.target.value })}
          />
        </div>
      ) : (
        <div className={todo.isDone ? "task completed" : "task"}>
          <p>{todo.task} </p>
          <p>{todo.assignee} </p>
        </div>
      )}

      <div className="task">
        <EditIcon
          fontSize="small"
          onClick={() => {
            toggleEdit ? handelEditclick() : setToggleEdit(!toggleEdit);
          }}
        />
        <DoneIcon fontSize="small" onClick={handelDoneClick} />
        <DeleteIcon fontSize="small" onClick={toggleShowModal} />
      </div>

      {showModal ? (
        <Modal>
          <h3>Are you sure Delete this Task</h3>
          <div className="modalButton">
            <button className="button" onClick={toggleShowModal}>
              CANCEL
            </button>
            <button className="deleteButton" onClick={handelDeleteclick}>
              DELETE
            </button>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default SingleToDo;
