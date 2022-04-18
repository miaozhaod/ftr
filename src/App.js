import { useState } from "react";
import "./App.css";
import {
  SecondsInput,
  NumberInput,
  DisplayResults,
  Quit,
  Farewell,
} from "./components";

function App() {
  // controll components to display or hidden
  const [isSecondsFormActive, setSecondsFormActive] = useState(true);
  const [isNumberFormActive, setIsNumberFormActive] = useState(false);
  const [isFarewellActive, setIsFarewellActive] = useState(false);
  // set states for the seconds between emitting numbers
  const [seconds, setSeconds] = useState();
  // set states for the numbers input;
  const [numberSequence, setNumberSequence] = useState("first");
  const [numbers, setNumbers] = useState([]);
  const [numberInput, setNumberInput] = useState();
  // set states for displaying information
  const [userInputs, setUserInputs] = useState();
  const [displayResult, setDisplayResult] = useState();
  // control halt and resume button disabled
  const [isHaltDisabled, setIsHaltDisabled] = useState(true);
  const [isResumeDisabled, setIsResumeDisabled] = useState(true);

  return (
    <div className="App">
      <SecondsInput
        isSecondsFormActive={isSecondsFormActive}
        setSecondsFormActive={setSecondsFormActive}
        setIsNumberFormActive={setIsNumberFormActive}
        seconds={seconds}
        setSeconds={setSeconds}
      />
      <div className={isNumberFormActive ? "active" : "inactive"}>
        <NumberInput
          numberSequence={numberSequence}
          setNumberSequence={setNumberSequence}
          numbers={numbers}
          setNumbers={setNumbers}
          numberInput={numberInput}
          setNumberInput={setNumberInput}
          setIsHaltDisabled={setIsHaltDisabled}
        />
        <DisplayResults
          numbers={numbers}
          seconds={seconds}
          setUserInputs={setUserInputs}
          displayResult={displayResult}
          setDisplayResult={setDisplayResult}
          isHaltDisabled={isHaltDisabled}
          setIsHaltDisabled={setIsHaltDisabled}
          isResumeDisabled={isResumeDisabled}
          setIsResumeDisabled={setIsResumeDisabled}
        />
        <Quit
          setIsNumberFormActive={setIsNumberFormActive}
          setIsFarewellActive={setIsFarewellActive}
        />
      </div>
      <Farewell
        seconds={seconds}
        userInputs={userInputs}
        isFarewellActive={isFarewellActive}
      />
    </div>
  );
}

export default App;
