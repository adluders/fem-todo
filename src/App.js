import React, { useState, useEffect } from "react";

import TodoContainer from "./components/TodoContainer";

import SunImg from "./images/icon-sun.svg";
import MoonImg from "./images/icon-moon.svg";
import DarkBg from "./images/bg-desktop-dark.jpg";
import LightBg from "./images/bg-desktop-light.jpg";

// const todos = [
// { id: 0, info: "Todo 1", isCompleted: false },
// { id: 1, info: "Todo 2", isCompleted: false },
// { id: 2, info: "Todo 3", isCompleted: false },
// ];

let incompleteTodos = [];

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    handleFilteredTodos();
    // eslint-disable-next-line
  }, [todoList]);

  const createTodo = (e) => setNewTodo(e.target.value);

  const addNewTodo = (e) => {
    e.preventDefault();

    newTodo.trim() !== "" &&
      setTodoList([
        ...todoList,
        {
          id: Math.floor(Math.random() * 10000),
          info: newTodo,
          isCompleted: false,
        },
      ]);
    setNewTodo("");
    // setFilteredTodos(JSON.parse(todoData) || todoList);
  };

  const deleteTodo = (currentTodo) => {
    const todosRemain = todoList.filter((todo) => todo.id !== currentTodo);
    setTodoList(todosRemain);
  };

  const updateComplete = (currentTodo) => {
    const todosFinished = todoList.filter((todo) => todo.id === currentTodo);
    setTodoList(
      [...todoList],
      (todosFinished[0].isCompleted = !todosFinished[0].isCompleted)
    );
  };

  const handleFilteredTodos = () => {
    setFilteredTodos(todoList);
  };

  const showCompleted = () => {
    const completedTodos = todoList.filter((todo) => todo.isCompleted);
    setFilteredTodos(completedTodos);
  };

  const clearCompleted = () => {
    const todosToUpdate = todoList.filter((todo) => todo.isCompleted);

    setTodoList(
      [...todoList],
      todosToUpdate.filter((todo) => (todo.isCompleted = !todo.isCompleted))
    );
  };

  const showIncompleteTodos = () => {
    incompleteTodos = todoList.filter((todo) => todo.isCompleted === false);
    setFilteredTodos(incompleteTodos);
  };

  const totalTodoCount = (incompleteTodos = todoList.filter(
    (todo) => todo.isCompleted === false
  ));

  const toggleTheme = () => setDarkTheme(!darkTheme);

  return (
    <main>
      <section className="header" style={darkTheme ? DarkStyles : LightStyles}>
        <div className="container">
          <div className="header-title ">
            <h1>todo</h1>
            <button className="theme-toggle" onClick={toggleTheme}>
              <img src={darkTheme ? SunImg : MoonImg} alt="Sun" />
            </button>
          </div>

          <div
            className="user-search"
            style={darkTheme ? DarkInput : LightInput}
          >
            <div className="user-search__checkmark"></div>

            <form className="user-search__input" onSubmit={addNewTodo}>
              <label htmlFor="user-input"></label>
              <input
                style={darkTheme ? DarkInput : LightInput}
                type="text"
                name="user-input"
                placeholder="Add new todo..."
                value={newTodo}
                onChange={createTodo}
              />
            </form>
          </div>
        </div>
      </section>

      <TodoContainer
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        updateComplete={updateComplete}
        showCompleted={showCompleted}
        showAllTodos={handleFilteredTodos}
        showIncompleteTodos={showIncompleteTodos}
        totalTodo={totalTodoCount.length}
        clearCompleted={clearCompleted}
        darkThemeActive={darkTheme}
      />

      <footer style={darkTheme ? DarkFooter : LightFooter}>
        <p>
          Challenged by{" "}
          <a
            href="https://www.frontendmentor.io/"
            target="_blank"
            rel="noreferrer"
          >
            Front End Mentor
          </a>
          , completed by{" "}
          <a
            href="https://www.adlerluders.com"
            target="_blank"
            rel="noreferrer"
          >
            Adler Luders
          </a>
        </p>
      </footer>
    </main>
  );
};

const LightStyles = {
  backgroundImage: `url(${LightBg})`,
};

const DarkStyles = {
  backgroundImage: `url(${DarkBg})`,
};

const DarkInput = {
  backgroundColor: "#25273c",
  color: "#cacde8",
};

const LightInput = {
  backgroundColor: "#fff",
  color: "#000",
};

const DarkFooter = {
  backgroundColor: "#161722",
  color: "#cacde8",
};

const LightFooter = {
  backgroundColor: "#fafafa",
  color: "#9394a5",
};

export default App;
