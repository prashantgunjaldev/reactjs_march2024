import "./app-header.css";
import logoImg from "../assets/training.png";
function AppHeader(props) {
  console.log("AppHeader component is executed");

  return (
    <header>
      <h1>{props.companyName}</h1>
      <img src={logoImg} />
      <nav>
        {/* Array of XML/HTML Tags can be render by React JS*/}
        {props.options.map((item) => (
          <a
            key={item.id}
            style={{
              color: "red",
              margin: "5px 10px",
              padding: "3px",
              border: "solid black 1px",
              borderRadius: "5px",
              cursor: "pointer",
              backgroundColor: "#ff8a80",
              color: "#b71c1c",
            }}
            onClick={() => {
              props.handleOnClick(item.id);
            }}
          >
            {item.title}
          </a>
        ))}
      </nav>
      {/* {content.length > 0 && <div className="styleAsButon">{content}</div>} */}
    </header>
  );
}

export default AppHeader;
