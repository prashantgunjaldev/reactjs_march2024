import { useEffect, useState } from "react";
import Carousel from "../components/carousel/Carousel";

interface Course {
  _id: number;
  name: string;
  duration: string;
  description: string;
  show: boolean;
}

function Home() {
  const [courses, setCourses] = useState<Course[]>([]);
  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("http://localhost:3000/course", {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
          "Content-Type": "application/json",
        },
      });
      const respData = await response.json();
      if (respData.length) {
        setCourses(respData);
      }
    };
    loadData();
  }, []);
  return (
    <>
      <Carousel />
      <h1>Courses</h1>
      <div className="row">
        {courses.map((c) => (
          <div className="col-3" key={c._id}>
            <div className="card">
              <img src="training.png" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{c.name}</h5>
                <h6 className="card-subtitle">{c.duration}</h6>
                <p className="card-text">{c.description}</p>
                <a className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
