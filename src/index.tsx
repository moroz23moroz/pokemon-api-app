import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/scss/normalize.scss";
import "./assets/scss/style.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { store } from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      closeOnClick
      rtl={true}
      theme="dark"
    />
  </React.StrictMode>
);
