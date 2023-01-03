import React, { useState } from "react";
import { ToDo } from "../../types";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import styles from "./styles";
import Modal from "../../../../components/Modal";
interface TodoFooterProps {
  todos: ToDo[];
  setToDos: (todos: ToDo[]) => void;
}

const TodoFooter: React.FC<TodoFooterProps> = ({ todos, setToDos }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleDeleteAllTodos = () => {
    setToDos([]);
    toggleShowModal();
  }

  return (
    <div style={styles.footer}>
      <span> {todos.length} todos</span>
      <DeleteSweepIcon fontSize="small" onClick={toggleShowModal} />

      {showModal ? (
        <Modal>
          <h3>Are you sure you want delete all Tasks</h3>
          <div>
            <button style={styles.button} onClick={toggleShowModal}>
              CANCEL
            </button>
            <button
              style={{ ...styles.button, ...styles.deleteButton }}
              onClick={handleDeleteAllTodos}
            >
              DELETE
            </button>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default TodoFooter;
