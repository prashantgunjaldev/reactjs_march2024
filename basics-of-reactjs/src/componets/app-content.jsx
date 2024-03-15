function AppContent(props) {
  return (
    <div
      style={{
        margin: "10px 10px",
        padding: "20px",
        border: "solid black 1px",
        borderRadius: "5px",
      }}
    >
      {props.content}
    </div>
  );
}

export default AppContent;
