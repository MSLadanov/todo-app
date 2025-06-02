import { useState } from "react";
import type { ITodo } from "../types/Todo";

export const useTodos = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [inputValue, setInputValue] = useState("");
  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: inputValue,
          completed: false,
        },
      ]);
      setInputValue("");
    }
  };
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };
  const pendingCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.filter((todo) => todo.completed).length;
  return {
    todos,
    inputValue,
    setInputValue,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    pendingCount,
    completedCount,
  };
};
