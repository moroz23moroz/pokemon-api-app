import { ToDo } from "../../models/todo-item";
import styles from "./ToDoList.module.scss";
import { ToDoListItem } from "./ToDoListItem/ToDoListItem";

export const ToDoList = (props: {
  todos: ToDo[];
  updateToDo: Function;
  deleteToDo: Function;
}) => {
  const checkedList = () => {
    return props.todos
      .filter((item) => !item.isDone)
      .map((item, idx) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={idx}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
          />
        );
      });
  };

  const unCheckedList = () => {
    return props.todos
      .filter((item) => item.isDone)
      .map((item, idx) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={idx}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
          />
        );
      });
  };

  return (
    <>
      <div className={styles.container}>
        <ul className={`${styles.list} ${styles.failed}`}>{checkedList()}</ul>
        <ul className={`${styles.list} ${styles.completed}`}>
          {unCheckedList()}
        </ul>
      </div>
    </>
  );
};
