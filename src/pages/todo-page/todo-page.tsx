import React from "react";
// import Header from '../../components/Header/Header'
import { Container } from "react-bootstrap";
import Todo from "../../components/todo";

const TodoPage: React.FC = () => {
  return (
    <div>
      <Container>
        <Todo />
      </Container>
    </div>
  );
};

export default TodoPage;
