import { toast } from "react-toastify";
import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDo } from "../models/todo-item";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { createAction, deleteAction, updateAction } from "../feature/ToDoList";

export const ToDoListPage = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos);
  const dispatch = useDispatch();
  const changeMessage = (toDoItem: ToDo) => {
    toDoItem.isDone === false ? toast("Задание выполнено") : toast("Задание еще не выполнено");
  };

  const createNewToDo = (text: string) => {
    dispatch(createAction(text));
  };

  const updateToDo = (toDoItem: ToDo) => {
    dispatch(updateAction(toDoItem));
    changeMessage(toDoItem);
  };

  const deleteToDo = (toDoItem: ToDo) => {
    dispatch(deleteAction(toDoItem));
    toast("Задание удалено");
  };

  return (
    <>
      <Form createNewToDo={createNewToDo} />
      <ToDoList
        todos={todoList}
        updateToDo={updateToDo}
        deleteToDo={deleteToDo}
      />
    </>
  );
};
