import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

describe("Todo App", () => {
  test("renders the app", () => {
    render(<App />);
    expect(screen.getByText("Список задач")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Добавить новую задачу...");
    const addButton = screen.getByText("Добавить");
    fireEvent.change(input, { target: { value: "Новая задача" } });
    fireEvent.click(addButton);
    expect(screen.getByText("Новая задача")).toBeInTheDocument();
    expect(screen.getByText("Осталось задач: 1")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Добавить новую задачу...");
    const addButton = screen.getByText("Добавить");
    fireEvent.change(input, { target: { value: "Задача для переключения" } });
    fireEvent.click(addButton);
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(screen.getByText("Осталось задач: 0")).toBeInTheDocument();
  });

  test("clears completed todos", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Добавить новую задачу...");
    const addButton = screen.getByText("Добавить");
    fireEvent.change(input, { target: { value: "Задача для удаления" } });
    fireEvent.click(addButton);
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    const clearButton = screen.getByText("Очистить выполненные");
    fireEvent.click(clearButton);
    expect(screen.queryByText("Задача для удаления")).not.toBeInTheDocument();
  });
});