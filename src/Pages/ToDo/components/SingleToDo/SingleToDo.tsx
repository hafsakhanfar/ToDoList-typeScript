import React, { useState } from "react";
import Modal from "../../../../components/Modal/Modal";
import { ToDo, Input } from "../../types";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import styles from "./styles";

interface todo {
  todo: ToDo;
  onDeleteTodo: (id: string) => void;
  onCompleteTodo: (id: string) => void;
  onEditTodo: (id: string, newTodo: ToDo) => void;
}
const SingleToDo: React.FC<todo> = ({
  todo,
  onDeleteTodo,
  onCompleteTodo,
  onEditTodo,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [inputs, setinputs] = useState<Input>({
    task: todo.task,
    assignee: todo.assignee,
  });

  const handelDoneClick = () => {
    onCompleteTodo(todo.id);
  };

  const handelDeleteclick = () => {
    onDeleteTodo(todo.id);
  };
  const handelEditclick = () => {
    onEditTodo(todo.id, {
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
    <div style={styles.toDo}>
      {toggleEdit ? (
        <div style={styles.task}>
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
        <div
          style={
            todo.isDone ? { ...styles.task, ...styles.completed } : styles.task
          }
        >
          <p>{todo.task} </p>
          <p>{todo.assignee} </p>
        </div>
      )}

      <div style={styles.task}>
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
          <h3>Are you sure you want to delete this Task</h3>
          <div>
            <button style={styles.button} onClick={toggleShowModal}>
              CANCEL
            </button>
            <button
              style={{ ...styles.button, ...styles.deleteButton }}
              onClick={handelDeleteclick}
            >
              DELETE
            </button>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default SingleToDo;
