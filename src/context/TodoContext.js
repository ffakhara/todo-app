import { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = (props) => {
  const tasks = [
    { text: "Vacuuming", done: false },
    { text: "Homework", done: false },
    { text: "Understanding use state?!", done: false },
    { text: "Wake Up", done: true },
    { text: "Have 6 coffees", done: true },
    { text: "Lunch", done: true },
    { text: "Shop for christmas presents", done: false },
  ];

  const [items, setItems] = useState(tasks);

  const updateItem = (todoText) => {
    setItems((previousState) => {
      return previousState.map((task) =>
        task.text === todoText ? { ...task, done: !task.done } : task
      );
    });
  };

  const addItem = (value) => {
    const newItem = { text: value, done: false };
    setItems((previousState) => [...previousState, newItem]);
  };

  const toDos = items.filter((item) => !item.done);
  const toDones = items.filter((item) => item.done);

  return (
    <TodoContext.Provider value={{ toDos, toDones, addItem, updateItem }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
