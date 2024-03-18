function AppContent(props) {
  return (
    <div
      style={{
        margin: "10px 10px",
        padding: "20px",
        border: "solid black 1px",
        borderRadius: "5px",
        backgroundColor: "#90caf9",
        color: "#1a237e",
        fontSize: "16px",
      }}
    >
      {props.content !== null ? (
        <>
          <h3>{props.content.info}</h3>
          <ol>
            {props.content.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ol>
        </>
      ) : (
        <p>Please click on some button</p>
      )}
    </div>
  );
}

export default AppContent;
