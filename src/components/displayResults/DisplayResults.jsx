import { HaltButton, ResumeButton } from "./components";
import "./DisplayResults.css";

export default function DisplayResults({
  numbers,
  seconds,
  displayResult,
  setUserInputs,
  setDisplayResult,
  isHaltDisabled,
  setIsHaltDisabled,
  isResumeDisabled,
  setIsResumeDisabled,
}) {
  // get the results object, and convert to string to prepare for display
  let uniqueNumberObj = {};
  const uniqueNumberArr = [...new Set(numbers)];
  uniqueNumberArr.map(num => {
    const getNumberLength = (array, value) => {
      return array.filter(v => v === value).length;
    };
    return (uniqueNumberObj[num] = getNumberLength(numbers, num));
  });
  const inputResults = JSON.stringify(uniqueNumberObj, null, 1)
    .replace(/['"]+/g, "")
    .replace(/[{}]/g, "");
  setUserInputs(inputResults);

  /**
   * the following three parts to display by interval, to halt and to resume are not properly functioning so far
   */
  // to display the result in an interval of the user input seconds
  const timeoutId = setTimeout(
    () => setDisplayResult(inputResults),
    seconds * 1000
  );

  // handle halt button click
  const halt = () => {
    setIsResumeDisabled(false);
    setIsHaltDisabled(true);
    clearTimeout(timeoutId);
  };

  // handle resume button click
  const resume = () => {
    setIsResumeDisabled(true);
    setIsHaltDisabled(false);
    setTimeout(() => setDisplayResult(inputResults), seconds * 1000);
  };

  return (
    <>
      <section className="display_card">
        <h1 className="results_title">Results &gt;&gt; </h1>
        <p className="results_content">{displayResult}</p>
      </section>
      {/* control buttons */}
      <div className="button_group">
        <HaltButton isHaltDisabled={isHaltDisabled} onClick={halt} />
        <ResumeButton isResumeDisabled={isResumeDisabled} onClick={resume} />
      </div>
    </>
  );
}
