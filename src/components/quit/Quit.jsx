export default function Quit({ setIsNumberFormActive, setIsFarewellActive }) {
  const handleQuit = () => {
    setIsFarewellActive(true);
    setIsNumberFormActive(false);
  };

  return (
    <>
      <button onClick={handleQuit}>Quit</button>
    </>
  );
}
