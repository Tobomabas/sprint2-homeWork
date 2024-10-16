import { useState, useEffect } from "react";
import { QUESTIONS } from "../quizQuestions";
import SummaryScreen from "./SummaryScreen";
import WelcomeScreen from "./WelcomeScreen";
import QuestionCard from "./QuestionCard";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [answerListArr, setAnswerListArr] = useState([]);
  const [showsWelcomeScreen, setShowWelcomeScreen] = useState(true);

  const handleAnswerClick = (selectedAnswer) => {
    setAnswerListArr((prevAnswerListArr) => [
      ...prevAnswerListArr,
      {
        question: QUESTIONS[currentQuestionIndex].text,
        selectedAnswer: selectedAnswer.text,
        isCorrect: selectedAnswer.isCorrect,
      },
    ]);

    if (selectedAnswer.isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < QUESTIONS.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setIsQuizFinished(true);
    }
  };
  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsQuizFinished(false);
    setAnswerListArr([]);
  };

  useEffect(() => {}, [score]);
  return (
    <>
      {showsWelcomeScreen ? (
        <WelcomeScreen onStart={setShowWelcomeScreen(false)} />
      ) : !isQuizFinished ? (
        <>
          <QuestionCard
            currentQuestionIndex={currentQuestionIndex}
            handleAnswerClick={handleAnswerClick}
          ></QuestionCard>
        </>
      ) : (
        <>
          <SummaryScreen
            forButton={restartQuiz}
            score={score}
            answerListArr={answerListArr}
          />
        </>
      )}
    </>
  );
};

export default Quiz;
