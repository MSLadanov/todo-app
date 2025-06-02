import React from "react";
import type { ITodo } from "../types/Todo";
import { ListItem, ListItemText, Checkbox, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface TodoItemProps {
  todo: ITodo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <ListItem>
      <Checkbox checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
      <ListItemText
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          color: todo.completed ? "gray" : "inherit",
        }}
      >
        {todo.text}
      </ListItemText>
      <IconButton onClick={() => deleteTodo(todo.id)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};
