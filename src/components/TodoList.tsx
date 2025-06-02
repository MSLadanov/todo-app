import React from 'react';
import type { ITodo } from "../types/Todo";
import { TodoItem } from './TodoItem';
import { List, Typography } from '@mui/material';

interface TodoListProps {
  todos: ITodo[];
  title: string;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  title,
  toggleTodo,
  deleteTodo,
}) => {
  if (todos.length === 0) return null;

  return (
    <div>
      <Typography variant="h6">{title}</Typography>
      <List>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </List>
    </div>
  );
};