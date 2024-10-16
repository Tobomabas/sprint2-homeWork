import { QUESTIONS } from "../quizQuestions";
const QuestionCard = ({ currentQuestionIndex, handleAnswerClick }) => {
  return (
    <>
      <h2>
        <div className="blue">{QUESTIONS[currentQuestionIndex].text}</div>
        <br></br>
      </h2>
      <div className="quiz-answers">
        {QUESTIONS[currentQuestionIndex].answers.map((answer, index) => (
          <div
            key={index}
            className="answer"
            onClick={() => handleAnswerClick(answer)}
          >
            {answer.text}
          </div>
        ))}
      </div>
    </>
  );
};
export default QuestionCard;
