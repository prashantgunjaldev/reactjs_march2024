import { useRef } from "react";
import { useState } from "react";

export default function UserForm() {
  //   const [userName, setUserName] = useState("");
  //   const [userEmail, setUserEmail] = useState("");
  //   const [userPhone, setUserPhone] = useState("");

  const userName = useRef();
  const userEmail = useRef();
  const userPhone = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      "User clicked submit",
      userName.current.value,
      userEmail.current.value,
      userPhone.current.value
    );
    // Validation
    // submit to backend
  };
  return (
    <form>
      <div>
        <label>User Name</label>
        <input
          type="text"
          name="username"
          ref={userName}
          //   onChange={(e) => {
          //     setUserName(e.target.value);
          //   }}
        />
      </div>
      <div>
        <label>User Email</label>
        <input
          type="email"
          name="useremail"
          ref={userEmail}
          //   onChange={(e) => setUserEmail(e.target.value)}
        />
      </div>
      <div>
        <label>User Phone</label>
        <input
          type="tel"
          name="userphone"
          ref={userPhone}
          //   onChange={(e) => setUserPhone(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}
