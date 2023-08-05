import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/scss/normalize.scss";
import "./assets/scss/style.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToDoListPage } from "./pages/ToDoListPage";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/Header/Header";
import { ToDo } from "./models/todo-item";

const todos: ToDo[] = [
  { id: 0, text: "во-первых", isDone: false },
  { id: 1, text: "во-вторых", isDone: true },
  { id: 2, text: "в-третьих", isDone: false },
  { id: 3, text: "в-четвертых", isDone: true },
];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage todos={todos} />}></Route>
        <Route path="/todo" element={<ToDoListPage />}></Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      closeOnClick
      rtl={true}
      theme="dark"
    />
  </React.StrictMode>
);
