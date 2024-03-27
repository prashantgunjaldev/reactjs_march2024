import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserForm from "./components/UserForm";

function App() {
  const [posts, setPosts] = useState([]);

  console.log("React Componet reexecuted");

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts([...data]);
    };
    loadData();
  }, []);
  //fetch data from backend

  //let count = 0;

  return (
    <>
      <h1>useEffect & useRef</h1>
      <div className="card">
        <UserForm />
      </div>
      <div className="read-the-docs">
        <ol>
          {posts.map((post) => (
            <li id={post.id}>{post.title}</li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default App;
