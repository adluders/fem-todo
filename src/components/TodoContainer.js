import Todo from "./Todo";

const TodoContainer = ({
  todos,
  deleteTodo,
  updateComplete,
  totalTodo,
  showCompleted,
  showAllTodos,
  showIncompleteTodos,
  clearCompleted,
  darkThemeActive,
}) => {
  return (
    <section
      style={darkThemeActive ? DarkTheme : LightTheme}
      className="todo-items "
    >
      <div className="todos container">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todoDetail={todo.info}
            isCompleted={todo.isCompleted}
            todoId={todo.id}
            deleteTodo={deleteTodo}
            updateComplete={updateComplete}
            darkThemeActive={darkThemeActive}
          />
        ))}

        <div
          className="todo-items__stats"
          style={darkThemeActive ? DarkStats : LightStats}
        >
          <div className="todo-items__counter">
            <p>{totalTodo} items left</p>
          </div>

          <div className="todo-items__filters">
            <p onClick={showAllTodos}>all</p>
            <p onClick={showIncompleteTodos}>active</p>
            <p onClick={showCompleted}>completed</p>
          </div>

          <div className="todo-items__clear">
            <p onClick={clearCompleted}>clear completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const DarkTheme = {
  backgroundColor: "#161722",
  color: "#cacde8",
};

const LightTheme = {
  backgroundColor: "#fafafa",
  color: "#9394a5",
};

const DarkStats = {
  backgroundColor: "#25273c",
  color: "#cacde8",
};

const LightStats = {
  backgroundColor: "white",
  color: "#000",
};

export default TodoContainer;
