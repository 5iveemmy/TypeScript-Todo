import React, { useState } from "react";
import { AddButton, ToDoForm, ToDoInput } from "../styles/styles";

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState("");

  return (
    <ToDoForm>
      <ToDoInput
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <AddButton
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          addTodo(text);
          setText("");
        }}
      >
        Add Todo
      </AddButton>
    </ToDoForm>
  );
};
