import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IQuery {
  _id?: number;
  name: string;
  email: string;
  phone: string;
  query: boolean;
  dateTime: string;
}

function Query() {
  const [data, setData] = useState<IQuery[]>([]);
  const navigate = useNavigate();
  const isValid = sessionStorage.getItem("access_token");
  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("http://localhost:3000/query", {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + isValid,
        },
      });
      const respData = await response.json();
      if (respData.length) {
        setData(respData);
      }
    };
    if (!isValid) {
      navigate("/");
    } else {
      loadData();
    }
  }, [isValid]);
  return (
    <div className="row container mt-4">
      <div className="col-2"></div>
      <div className="col-8 mt-4">
        <h1 className="text-center">User Queries</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Query</th>
            </tr>
          </thead>
          <tbody>
            {data.map((query, index) => (
              <tr key={query._id}>
                <th>{index + 1}</th>
                <td>{query.name}</td>
                <td>{query.email}</td>
                <td>{query.phone}</td>
                <td>{query.query}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Query;
