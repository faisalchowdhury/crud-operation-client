import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout/Layout.jsx";
import AddUser from "./Component/AddUser.jsx";
import UserList from "./Component/UserList.jsx";
import UpdateUser from "./Component/UpdateUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: UserList,
        loader: () => fetch("http://localhost:3000/users"),
      },
      {
        path: "/add-user",
        Component: AddUser,
      },
      {
        path: "/update-user/:id",
        Component: UpdateUser,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/update-user/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
