import { useContext } from "react";

import ToDoneItem from "./ToDoneItem";
import TodoContext from "../context/TodoContext";

const ToDonesContainer = () => {
  const { toDones } = useContext(TodoContext);

  const toDonesItems = toDones.map((toDone) => {
    return <ToDoneItem toDoneProp={toDone} key={toDone.text} />;
  });

  return (
    <div className="todones-container">
      <div>
        <h3>BACKLOG</h3>
        {toDones.length > 0 && toDonesItems}
      </div>
    </div>
  );
};

export default ToDonesContainer;
