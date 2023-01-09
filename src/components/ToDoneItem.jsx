import { useContext } from "react";
import TodoContext from "../context/TodoContext";

const ToDoneItem = (props) => {
  const { updateItem } = useContext(TodoContext);

  const toDone = props.toDoneProp;

  return (
    <div className="todones-item">
      <p>{toDone.text}</p>
      <div className="actions">
        <button
          className="btn"
          onClick={() => {
            updateItem(toDone.text);
          }}
        >
          &#8635;
        </button>
      </div>
    </div>
  );
};

export default ToDoneItem;
