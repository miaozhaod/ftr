import "./Farewell.css";

export default function Farewell({ seconds, userInputs, isFarewellActive }) {
  const startAgain = () => {
    window.location.reload(false);
  };

  return (
    <div className={isFarewellActive ? "acitve" : "inactive"}>
      <h1 className="title">Thanks for playing, here is a summary for you: </h1>
      <div className="farewell_result_wrapper">
        <p>
          Your entered seconds is: <span>{seconds}</span> s
        </p>
        <p>
          Your input summary is: <span>{userInputs}</span>
        </p>
        <button className="start_again_button" onClick={startAgain}>
          Start Again
        </button>
      </div>
    </div>
  );
}
