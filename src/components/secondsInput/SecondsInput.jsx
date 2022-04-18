import { useState } from "react";
import { AiOutlineEnter } from "react-icons/ai";

export default function SecondsInput({
  isSecondsFormActive,
  setSecondsFormActive,
  setIsNumberFormActive,
  setIsDisplayResultsActive,
  seconds,
  setSeconds,
}) {
  // control button disabled
  const [isDisabled, setIsDisabled] = useState(true);

  // handle user input change
  const handleOnChange = event => {
    setSeconds(parseInt(event.target.value));
    setIsDisabled(false);
  };

  // handle user click submit or hit enter key
  const handleOnClick = e => {
    e.preventDefault();
    setIsNumberFormActive(true);
    setSecondsFormActive(false);
    setIsDisplayResultsActive(true);
    return seconds;
  };
  const handleOnKeyPress = ({ key }) => {
    key === "Enter" && handleOnClick();
  };

  return (
    <form className={isSecondsFormActive ? "active" : "inactive"}>
      <label htmlFor="seconds">
        Please input the number of time in seconds between emitting numbers and
        their frequency<span>.</span>
      </label>
      <div className="input_enter">
        <AiOutlineEnter />
        <input type="text" id="seconds" onChange={handleOnChange} />
      </div>
      <button
        type="submit"
        onClick={handleOnClick}
        onKeyPress={handleOnKeyPress}
        disabled={isDisabled}
        className={isDisabled && "disabled"}
      >
        Confirm
      </button>
    </form>
  );
}
