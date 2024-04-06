import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    const data = {
      username: userNameRef.current?.value || "",
      password: passwordRef.current?.value || "",
    };

    if (data.username.trim() === "" || data.password.trim() === "") {
      setError("Provide valid information");
    } else {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const respData = await response.json();
      console.log(respData);
      if (respData?.access_token) {
        //store in session storage
        //navirage to courses
        sessionStorage.setItem("access_token", respData.access_token);
        navigate("/course");
      } else {
        setError("Please provide valid username and password");
      }
    }
  };
  return (
    <>
      <div className="row mt-4">
        <div className="col-3"></div>
        <div className="col-6">
          <form>
            <div className="mb-3">
              <label className="form-label">Use Name</label>
              <input type="text" className="form-control" ref={userNameRef} />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                ref={passwordRef}
              />
            </div>
            {error.length > 0 && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary"
            >
              Login
            </button>
          </form>
        </div>
        <div className="col-3"></div>
      </div>
    </>
  );
}

export default Home;
