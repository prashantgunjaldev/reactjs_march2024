import { useRef, useState } from "react";

function Contact() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const queryRef = useRef<HTMLTextAreaElement>(null);
  const [isError, setError] = useState<boolean>(false);
  const [isSuccess, setSuccess] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError(false);
    const data = {
      name: nameRef.current?.value || "",
      email: emailRef.current?.value || "",
      phone: phoneRef.current?.value || "",
      query: queryRef.current?.value || "",
    };
    console.log("Data", data);

    if (
      data.email.trim() === "" ||
      data.name.trim() === "" ||
      data.phone.trim() === "" ||
      data.query.trim() === ""
    ) {
      setError(true);
    } else {
      const response = await fetch("http://localhost:3000/query", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const respData = await response.json();
      if (respData?._id) {
        setSuccess(true);
      }
    }
  };
  return (
    <div className="container marketing" style={{ marginTop: "20px" }}>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Address</h5>
              <p className="card-text">
                <b>Some Training Institute</b>,<br />
                At some location, <br />
                Some state - 415656
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Contact Us</h5>
              <form>
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input type="text" className="form-control" ref={nameRef} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input type="email" className="form-control" ref={emailRef} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" ref={phoneRef} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Query</label>
                  <textarea
                    className="form-control"
                    ref={queryRef}
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
                    Submitted information.
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

export default Contact;
