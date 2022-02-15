import { useState } from "react";
import { Header, List } from "../styles/styles";
import { AddTodoForm } from "./AddTodoForm";
import { TodoList } from "./TodoList";

const initialTodos: Todo[] = [
  {
    text: "Go to gym",
    complete: false,
  },
  {
    text: "Write app",
    complete: true,
  },
];

const TodoApp = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };
  return (
    <>
      <Header>ToDo App</Header>
      <List>
        <AddTodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} />
      </List>
    </>
  );
};

export default TodoApp;
