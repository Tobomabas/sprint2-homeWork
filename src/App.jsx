import { useState } from "react";

import "./App.css";
import Quiz from "./components/Quiz";
import WelcomeScreen from "./components/WelcomeScreen";

function App() {
  const [showQuiz, setShowQuiz] = useState(false);
  const handleStartQuiz = () => {
    setShowQuiz(true);
  };
  return (
    <>
      <h1>JavaScript Quiz</h1>
      {showQuiz ? <Quiz /> : <WelcomeScreen onStart={handleStartQuiz} />}
    </>
  );
}

export default App;
