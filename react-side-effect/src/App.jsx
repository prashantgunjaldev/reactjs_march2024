import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

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
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
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
