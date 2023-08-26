import React from "react";
import "./todo-footer.css";
import { Link } from "react-router-dom";

interface ITodoFooterProps {
  numberOfIncompleteTasks: number;
}

const TodoFooter: React.FC<ITodoFooterProps> = ({
  numberOfIncompleteTasks,
}) => {
  return (
    <div className="todo-footer">
      <p data-testId="para">
        {numberOfIncompleteTasks}{" "}
        {numberOfIncompleteTasks === 1 ? "task" : "tasks"} left
      </p>
      <Link to="/followers">Followers</Link>
    </div>
  );
};

export default TodoFooter;
