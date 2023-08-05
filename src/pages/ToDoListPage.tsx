import { toast } from "react-toastify";
import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDo } from "../models/todo-item";
import { useState } from "react";

export const ToDoListPage = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const createNewToDo = (text: string) => {
    const newToDo: ToDo = {
      id: todos.length,
      text: text,
      isDone: false,
    };
    setTodos([...todos, newToDo]);
  };

  const changeMessage = (toDoItem: ToDo) => {
    toDoItem.isDone === true
      ? toast("Задание выполнено")
      : toast("Задание еще не выполнено");
  };

  const updateToDo = (toDoItem: ToDo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === toDoItem.id) {
        todo.isDone = !todo.isDone;
        changeMessage(todo);
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteToDo = (toDoItem: ToDo) => {
    const newTodos = todos.filter((todo) => todo.id !== toDoItem.id);
    setTodos(newTodos);
    toast("Задание удалено");
  };

  return (
    <>
      <Form createNewToDo={createNewToDo} />
      <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
    </>
  );
};
