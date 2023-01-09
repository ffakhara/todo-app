import { useRef } from "react";
import { useContext } from "react";

import TodoContext from "../context/TodoContext";

const AddNewTodo = () => {
  const { addItem } = useContext(TodoContext);

  const inputRef = useRef(null); // {current: <input />}

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newTodoText = inputRef.current.value;
    addItem(newTodoText);
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={onSubmitHandler} className="todo-form">
      <label className="input-item">
        <input type="text" name="todo" ref={inputRef} />
        <input type="submit" className="btn input-btn" value="Add" />
      </label>
    </form>
  );
};

export default AddNewTodo;
