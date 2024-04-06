import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import getData, { deleteData } from "../util/APICalls";
import { ICourse } from "../util/interfases.def";

function Course() {
  const [data, setData] = useState<ICourse[]>([]);
  const navigate = useNavigate();
  const isValid = sessionStorage.getItem("access_token");
  useEffect(() => {
    const loadData = async () => {
      const data = await getData("course");
      if (data?.length) {
        setData(data);
      }
    };
    if (!isValid) {
      navigate("/");
    } else {
      loadData();
    }
  }, [isValid]);

  const deleteCourse = async (id?: number) => {
    const isDeleted = await deleteData("course/" + id);
    if (isDeleted) {
      const data = await getData("course");
      if (data?.length) {
        setData(data);
      }
    }
  };
  return (
    <div className="row container mt-4">
      <div className="col-1"></div>
      <div className="col-10 mt-4">
        <h1 className="text-center">All Courses</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Duration</th>
              <th scope="col">Description</th>
              <th scope="col">Show</th>
              <th scope="col">Controls</th>
            </tr>
          </thead>
          <tbody>
            {data.map((course, index) => (
              <tr key={course._id}>
                <th>{index + 1}</th>
                <td>{course.name}</td>
                <td>{course.duration}</td>
                <td>{course.description}</td>
                <td>
                  {course.show ? (
                    <span className="badge text-bg-success">Visible</span>
                  ) : (
                    <span className="badge text-bg-danger">Hidden</span>
                  )}
                </td>
                <td>
                  <Link
                    to={"/newcourse/" + course._id}
                    type="button"
                    className="btn btn-primary btn-sm"
                  >
                    Edit
                  </Link>
                  &nbsp;
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      deleteCourse(course._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Course;
