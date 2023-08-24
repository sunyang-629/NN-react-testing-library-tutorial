import React from "react";
import "./todo.css";
import AddInput from "../add-input";
import Header from "../header";
import TodoList from "../todo-list";
import { TodoType } from "../todo-list/todo-list";

const Todo: React.FC = () => {
  const [todos, setTodos] = React.useState<TodoType[]>([]);

  return (
    <div className="todo">
      <Header title="Todo" />
      <AddInput setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todo;
