export default function ResumeButton({ isResumeDisabled, onClick }) {
  return (
    <button
      type="button"
      disabled={isResumeDisabled}
      className={isResumeDisabled ? "disabled" : "control_button"}
      onClick={onClick}
    >
      Resume
    </button>
  );
}
