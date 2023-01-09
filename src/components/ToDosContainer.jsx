import { useContext } from "react";

import AddNewTodo from "./AddNewTodo";
import { ToDoItem } from "./ToDoItem";
import TodoContext from "../context/TodoContext";

const ToDosContainer = () => {
  const { toDos } = useContext(TodoContext);

  const toDoItems = toDos.map((todo) => (
    <ToDoItem key={todo.text} todoProp={todo} />
  ));

  return (
    <div className="todos-container">
      <AddNewTodo />

      <div className="todos">
        <h3>To Do</h3>
        {toDos.length > 0 && toDoItems}
      </div>
    </div>
  );
};

export default ToDosContainer;
