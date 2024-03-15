import "./app-header.css";
function AppHeader(props) {
  console.log("AppHeader component is executed");

  return (
    <header>
      <h1>{props.companyName}</h1>

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
