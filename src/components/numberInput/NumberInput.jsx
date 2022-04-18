import "./NumberInput.css";
import { AiOutlineEnter } from "react-icons/ai";

export default function NumberInput({
  numberSequence,
  setNumberSequence,
  numbers,
  setNumbers,
  numberInput,
  setNumberInput,
  setIsHaltDisabled,
}) {
  // handle user input change
  const handleOnChange = event => {
    setNumberInput(parseInt(event.target.value));
  };

  // check for Fibonacci numbers by checking perfect square (ref: https://www.geeksforgeeks.org/check-number-fibonacci-number/)
  const isPerfectSquare = x => {
    let s = parseInt(Math.sqrt(x));
    return s * s === x;
  };
  const isFibonacci = n => {
    return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
  };

  // handle user submit input numbers by hitting enter key
  const handleOnClick = () => {
    setNumbers(numbers => numbers.concat(numberInput));
    setNumberSequence("next");
    setIsHaltDisabled(false);
    isFibonacci(numberInput) && alert("FIB");
  };
  const hanldeOnKeyPress = ({ key }) => {
    key === "Enter" && handleOnClick();
  };
  const submitNumberHandler = e => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <form onSubmit={submitNumberHandler}>
      <label htmlFor="number">
        Please enter the {numberSequence} number<span>.</span>
      </label>
      <div className="input_enter">
        <AiOutlineEnter />
        <input
          type="text"
          id="number"
          onChange={handleOnChange}
          onKeyPress={hanldeOnKeyPress}
        />
      </div>
      <button
        type="button"
        onClick={handleOnClick}
        className="number_button"
      >
        Submit
      </button>
    </form>
  );
}
