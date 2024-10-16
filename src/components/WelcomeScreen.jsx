import Button from "./Button.jsx";

const WelcomeScreen = ({ onStart }) => {
  return (
    <>
      Witamy w naszym Quzie
      <p>
        <Button onClick={onStart}>Startujemy z Quizem</Button>
      </p>
    </>
  );
};
export default WelcomeScreen;
