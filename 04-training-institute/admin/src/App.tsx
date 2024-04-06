import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./Root";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Query from "./pages/Query";
import NewCourse from "./pages/NewCourse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/query", element: <Query /> },
      { path: "/course", element: <Course /> },
      { path: "/newcourse", element: <NewCourse /> },
      { path: "/newcourse/:id", element: <NewCourse /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
