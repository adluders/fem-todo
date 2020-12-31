import styled from "styled-components";
import CheckImg from "../images/icon-check.svg";

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem;
  border-bottom: 1px solid #d2d3db;

  &::first-of-type {
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
  }

  &.completed {
    text-decoration: line-through;
    color: #e4e5f1;

    &.todo-item__checkmark {
      background-color: linear-gradient(120deg, #57ddff 0%, #c058f3 65%);
    }
  }
`;

const CheckMark = styled.div`
  border: 1px solid #e4e5f1;
  border-radius: 50%;

  cursor: pointer;

  width: 30px;
  height: 30px;
  margin-right: 0.7rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTodo = () => {
  return (
    <>
      <TodoItem>
        <CheckMark>
          <img src={CheckImg} alt="" />
        </CheckMark>
        todo1
      </TodoItem>
      <TodoItem> todo2 </TodoItem>
      <TodoItem> todo3 </TodoItem>
    </>
  );
};

export default StyledTodo;
