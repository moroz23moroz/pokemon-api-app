import { ToDo } from "../../../models/todo-item";
import styles from "./ToDoListItem.module.scss";

export const ToDoListItem = (props: {
  toDoItem: ToDo;
  updateToDo: Function;
  deleteToDo: Function;
}) => {
  return (
    <>
      <li className={styles.wrapper}>
        <span>{props.toDoItem.text}</span>
        <div className={styles.buttons}>
          <button
            className={styles.trash}
            onClick={() => props.deleteToDo(props.toDoItem)}
          ></button>
          <button
            className={props.toDoItem.isDone ? styles.check : styles.uncheck}
            onClick={() => props.updateToDo(props.toDoItem)}
          ></button>
        </div>
      </li>
    </>
  );
};
