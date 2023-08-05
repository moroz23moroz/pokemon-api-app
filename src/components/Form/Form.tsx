import { useState } from "react";
import styles from "./Form.module.scss";
import { toast } from "react-toastify";

export const Form = (props: { createNewToDo: Function }) => {
  const [text, setText] = useState<string>("");

  const formSubmit = () => {
    if (text) {
      props.createNewToDo(text);
      setText("");
      toast("Задание добавлено");
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <form action="#" onSubmit={formSubmit}>
          <label>
            <input
              value={text}
              type="text"
              onChange={(e) => setText(e.target.value)}
            />
            <button></button>
          </label>
        </form>
      </div>
    </>
  );
};
