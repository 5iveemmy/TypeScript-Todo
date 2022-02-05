import React from "react";
import { Items, ItemsInput, ItemsLabel, Indicator } from "../styles/styles";

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <Items>
      <ItemsLabel
        style={{ textDecoration: todo.complete ? "line-through" : undefined }}
      >
        <ItemsInput
          type="checkbox"
          checked={todo.complete}
          onClick={() => {
            toggleTodo(todo);
          }}
        />
        <Indicator></Indicator>
        {todo.text}
      </ItemsLabel>
    </Items>
  );
};
