export default function Answer(props) {
  return props.turned !== "false" ? (
    props.turned === "true" ? (
      <button
        onClick={props.onClick}
        style={{
          backgroundColor: "#94D7A2",
          border: 0,
        }}
        className="answer-button"
      >
        {props.title}
      </button>
    ) : (
      <button
        onClick={props.onClick}
        style={
          props.turned
            ? {
                backgroundColor: "#D6DBF5",
                border: 0,
              }
            : {}
        }
        className="answer-button"
      >
        {props.title}
      </button>
    )
  ) : (
    <button
      onClick={props.onClick}
      style={{
        backgroundColor: "#F8BCBC",
        border: 0,
      }}
      className="answer-button"
    >
      {props.title}
    </button>
  );
}
