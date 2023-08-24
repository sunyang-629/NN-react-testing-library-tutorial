import React from "react";
import "./todo-list.css";
import TodoFooter from "../todo-footer";

export type TodoType = {
  id: string;
  completed: boolean;
  task: string;
};

interface ITodoListProps {
  setTodos: (value: React.SetStateAction<TodoType[]>) => void;
  todos: Array<TodoType>;
}

const TodoList: React.FC<ITodoListProps> = ({ setTodos, todos }) => {
  const updateTask = (id: string) => {
    const updatedTasks = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    setTodos(updatedTasks);
  };

  const calcNumberOfIncompletedTasks = () => {
    let count = 0;
    todos.forEach((todo) => {
      if (!todo.completed) count++;
    });
    return count;
  };

  return (
    <div className="todolist-container">
      <div className="todos-container">
        <div>
          {todos.map((todo) => (
            <div
              className={`todo-item ${todo.completed && "todo-item-active"}`}
              onClick={() => updateTask(todo.id)}
            >
              {todo.task}
            </div>
          ))}
        </div>
      </div>
      <div>
        <TodoFooter numberOfIncompleteTasks={calcNumberOfIncompletedTasks()} />
      </div>
    </div>
  );
};

export default TodoList;
