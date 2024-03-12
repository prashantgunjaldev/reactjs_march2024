import { useState } from "react";
import "./app-header.css";
function AppHeader() {
  let [content, setContent] = useState("");
  let companyName = "Training Institute";
  let options = ["Home Page", "About Us", "Contact Us", "Trainings"];

  console.log("AppHeader component is executed");

  // let style = {
  //   color: 'red',
  //   paddingRight: 10px
  // }

  // let content = "";

  function handleClickEvent(pageName) {
    // alert("Clicked some button" + pageName);
    setContent(pageName + " is selected");
    // console.log("Updated content", content);
  }

  return (
    <header>
      <h1>{companyName}</h1>

      <nav>
        {/* Array of XML/HTML Tags can be render by React JS*/}
        {options.map((item) => (
          <a
            style={{
              color: "red",
              marginRight: "5px",
              padding: "3px",
              border: "dashed",
            }}
            onClick={() => {
              handleClickEvent(item);
            }}
          >
            {item}
          </a>
        ))}
      </nav>
      {content.length > 0 && <div className="styleAsButon">{content}</div>}
    </header>
  );
}

export default AppHeader;
