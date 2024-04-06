import { useEffect, useRef, useState } from "react";
import { ICourse } from "../util/interfases.def";
import getData, { createCourse, editCourse } from "../util/APICalls";
import { useNavigate, useParams } from "react-router-dom";

function NewCourse() {
  const nameRef = useRef<HTMLInputElement>(null);
  const durationRef = useRef<HTMLInputElement>(null);
  const showRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const [isError, setError] = useState<boolean>(false);
  const [isSuccess, setSuccess] = useState<boolean>(false);
  const param = useParams();

  console.log("All Params", param.id);

  const navigate = useNavigate();
  const isValid = sessionStorage.getItem("access_token");
  useEffect(() => {
    const loadData = async () => {
      const data: ICourse = await getData("course/" + param.id);
      console.log("Data", data);
      if (data) {
        nameRef.current!.value = data.name;
        durationRef.current!.value = data.duration;
        showRef.current!.checked = data.show;
        descriptionRef.current!.value = data.description;
      }
    };
    if (!isValid) {
      navigate("/");
    } else {
      if (param.id) loadData();
    }
  }, [isValid, param.id]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError(false);
    const data: ICourse = {
      name: nameRef.current?.value || "",
      duration: durationRef.current?.value || "",
      show: showRef.current?.checked || false,
      description: descriptionRef.current?.value || "",
    };
    console.log("Data", data);

    if (
      data.duration.trim() === "" ||
      data.name.trim() === "" ||
      data.description.trim() === ""
    ) {
      setError(true);
    } else {
      let isSuccess = false;
      if (param.id) {
        isSuccess = await editCourse("course/" + param.id, {
          _id: parseFloat(param.id),
          ...data,
        });
      } else {
        isSuccess = await createCourse("course", data);
      }
      if (isSuccess) {
        setSuccess(true);
        setTimeout(() => {
          navigate("/course");
        }, 1000);
      }
    }
  };
  return (
    <div className="container marketing" style={{ marginTop: "20px" }}>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                {param.id ? "Edit Course" : "New Course"}
              </h5>
              <form>
                <div className="mb-3">
                  <label className="form-label">Course Name</label>
                  <input type="text" className="form-control" ref={nameRef} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Duration</label>
                  <input
                    type="text"
                    className="form-control"
                    ref={durationRef}
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    ref={showRef}
                  />
                  <label className="form-check-label">Show ?</label>
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    ref={descriptionRef}
                    rows={3}
                  ></textarea>
                </div>
                {isError && (
                  <div className="alert alert-danger" role="alert">
                    Please provide valid information!
                  </div>
                )}
                {isSuccess && (
                  <div className="alert alert-success" role="alert">
                    Created ne course.
                  </div>
                )}
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCourse;
