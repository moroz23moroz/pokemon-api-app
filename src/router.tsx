import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { NotFound } from "./pages/404";
import { ViewList } from "./pages/ViewList";
import { ToDoListPage } from "./pages/ToDoListPage";
import { ViewListItem } from "./pages/ViewListItem";
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
        element: <ToDoListPage />,
      },
      {
        path: "/list",
        element: <ViewList todos={todos} />,
      },
      {
        path: "/list/:id",
        element: <ViewListItem todos={todos} />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
