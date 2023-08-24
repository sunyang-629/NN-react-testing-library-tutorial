import React from "react";
import "./add-input.css";
import { v4 as uuidv4 } from "uuid";
import { TodoType } from "../todo-list/todo-list";

interface IAddInputProps {
  setTodos: (value: React.SetStateAction<TodoType[]>) => void;
  todos: Array<TodoType>;
}

const AddInput: React.FC<IAddInputProps> = ({ setTodos, todos }) => {
  const [todo, setTodo] = React.useState("");

  const addTodo = () => {
    if (!todo) return;
    const updatedTodos = [
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
      },
    ];
    setTodos(updatedTodos);
    setTodo("");
  };

  return (
    <div className="input-container">
      <input
        className="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task here..."
      />
      <button className="add-btn" onClick={addTodo}>
        Add
      </button>
    </div>
  );
};

export default AddInput;
