import CheckMark from "../images/icon-check.svg";
import DeleteCross from "../images/icon-cross.svg";

const Todo = ({
  todoDetail,
  isCompleted,
  deleteTodo,
  todoId,
  updateComplete,
  darkThemeActive,
}) => {
  return (
    <div
      style={darkThemeActive ? DarkTheme : LightTheme}
      className={`todo-item ${isCompleted && "completed"} `}
    >
      <div
        className="todo-item__checkmark"
        onClick={() => updateComplete(todoId)}
      >
        <img src={CheckMark} alt="checkmark" />
      </div>

      <div className="todo-item__details">
        <p>{todoDetail}</p>
      </div>

      <div className="todo-item__delete">
        <button onClick={() => deleteTodo(todoId)}>
          <img src={DeleteCross} alt="delete-cross" />
        </button>
      </div>
    </div>
  );
};

const DarkTheme = {
  backgroundColor: "#25273c",
  color: "#cacde8",
  borderColor: "#cacde8",
};

const LightTheme = {
  backgroundColor: "white",
  color: "#000",
  borderColor: "#d2d3db",
};

export default Todo;
