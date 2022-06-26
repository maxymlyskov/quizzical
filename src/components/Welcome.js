export default function Welcome(props) {
  return (
    <div className="welcome-block">
      <h1 className="welcome-title">Quizzical</h1>
      <h2 className="welcome-description">Just answer.</h2>
      <button className="welcome-button" onClick={props.onClick}>
        Start quiz
      </button>
    </div>
  );
}
