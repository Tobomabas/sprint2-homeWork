import Button from "./Button";
import { QUESTIONS } from "../quizQuestions";

const SummaryScreen = ({ forButton, score, answerListArr }) => {
  console.log("KONIEC IMPREZY");
  const percentageResult = (score / QUESTIONS.length) * 100;
  return (
    <>
      <div>
        <div>
          {[
            percentageResult < 80 ? (
              <span key="bad" className="red">
                Przykro mi - nie zaliczono
              </span>
            ) : (
              <span key="good" className="green">
                DOBRZE !! - zaliczono
              </span>
            ),
          ]}
        </div>
        Quiz zakończony! Twój wynik to: {percentageResult}% ({score} /{" "}
        {QUESTIONS.length})<h3>Twoje odpowiedzi:</h3>
        <ul>
          {answerListArr.map((answer, index) => (
            <li key={index}>
              <span className="blue">Pytanie: {answer.question}</span>
              <br />
              <strong>Twoja odpowiedź:</strong>{" "}
              <span style={{ color: answer.isCorrect ? "green" : "red" }}>
                {answer.selectedAnswer}
              </span>{" "}
            </li>
          ))}
        </ul>
      </div>
      <Button onClick={forButton}>Rozpocznij od nowa</Button>
    </>
  );
};

export default SummaryScreen;
