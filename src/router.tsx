import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { NotFound } from "./pages/404";
import { ViewList } from "./pages/ViewList";
import { ToDoListPage } from "./pages/ToDoListPage";
import { ItemDescription } from "./pages/ItemDescription";
import { ToDo } from "./models/todo-item";

const todos: ToDo[] = [
    { id: 0, text: "во-первых", isDone: false },
    { id: 1, text: "во-вторых", isDone: true },
    { id: 2, text: "в-третьих", isDone: false },
    { id: 3, text: "в-четвертых", isDone: true },
  ];

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <ViewList todos={todos} />,
        },
        {
          path: "/todo",
          element: <ToDoListPage />,
        },
        {
          path: "/list/:id",
          element: <ItemDescription todos={todos} />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);