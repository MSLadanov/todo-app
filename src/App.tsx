import React from "react";
import { useTodos } from "./hooks/useTodos";
import { TodoList } from "./components/TodoList";
import { TodoReview } from "./components/TodoReview";
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const App: React.FC = () => {
  const {
    todos,
    inputValue,
    setInputValue,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    pendingCount,
    completedCount,
  } = useTodos();

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const pendingTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Список задач
        </Typography>

        <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Добавить новую задачу..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <Button
            variant="contained"
            onClick={addTodo}
            disabled={!inputValue.trim()}
            startIcon={<AddIcon />}
          >
            Добавить
          </Button>
        </Box>

        <TodoList
          todos={todos}
          title="Все задачи"
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />

        <TodoList
          todos={pendingTodos}
          title="Невыполненные задачи"
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />

        <TodoList
          todos={completedTodos}
          title="Выполненные задачи"
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />

        <TodoReview
          pendingCount={pendingCount}
          clearCompleted={clearCompleted}
          hasCompleted={completedCount > 0}
        />
      </Paper>
    </Container>
  );
};

export default App;
