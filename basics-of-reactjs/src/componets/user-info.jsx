import { useState } from "react";

function UserInfo() {
  const [userTypedInfo, setUserTypedInfo] = useState("");

  function handleDataChange(event) {
    setUserTypedInfo(event.target.value);
  }
  return (
    <div>
      <p>
        <label>Name</label>
        <input onChange={handleDataChange} />
      </p>
      <p>User Typed : {userTypedInfo}</p>
    </div>
  );
}
export default UserInfo;
