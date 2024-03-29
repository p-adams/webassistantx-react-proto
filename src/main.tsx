import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./ErrorPage.tsx";
import Message from "./routes/Message.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/message", element: <Message /> },
      { path: "/calendar", element: <></> },
      { path: "/tasks", element: <></> },
      { path: "/notes", element: <></> },
      { path: "/contacts", element: <></> },
      { path: "/finance", element: <></> },
      { path: "/health", element: <></> },
      { path: "/news", element: <></> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
