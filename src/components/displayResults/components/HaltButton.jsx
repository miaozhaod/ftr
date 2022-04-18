export default function HaltButton({ isHaltDisabled, onClick }) {
  return (
    <button
      type="button"
      disabled={isHaltDisabled}
      className={isHaltDisabled ? "disabled" : "control_button"}
      onClick={onClick}
    >
      Halt
    </button>
  );
}
