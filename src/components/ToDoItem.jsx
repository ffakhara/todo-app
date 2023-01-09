import { useContext } from "react";
import TodoContext from "../context/TodoContext";

export const ToDoItem = ({ todoProp }) => {
  const { updateItem } = useContext(TodoContext);

  const onClickHandler = () => {
    updateItem(todoProp.text);
  };

  return (
    <div className="todo-item">
      <p>{todoProp.text}</p>
      <div className="actions">
        <button className="btn" onClick={onClickHandler}>
          &#10004;
        </button>
      </div>
    </div>
  );
};
