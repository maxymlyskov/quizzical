import { useState } from "react";
import Answer from "./Answer";
import { decode } from "html-entities";

export default function Quiz(props) {
  const [answers, setAnswers] = useState(props.answers);
  const [correctAnswer, setCorrectAnswer] = useState(false);

  const turnTrue = (id) => {
    setAnswers((prevAnswers) =>
      prevAnswers.map((ans, i) => {
        if (!ans.title) {
          return ans === id
            ? { title: ans, turned: !ans.turned, result: false }
            : { title: ans, turned: false, result: false };
        } else {
          return ans.title === id
            ? { title: ans.title, turned: !ans.turned, result: false }
            : { title: ans.title, turned: false, result: false };
        }
      })
    );
  };
  const handleCheck = () => {
    const arr = answers.map((a) => (a.turned ? a.title : null));
    const correct = arr.filter((a) => a !== null);
    if (correct[0]) {
      if (correct[0] === props.correct) setCorrectAnswer(true);
      const arrForCheck = answers.map((a) => a.title === correct[0]);

      const indexArr = arrForCheck.indexOf(true);
      const answerMade = answers[indexArr].title;
      const answerCorrect = decode(props.correct);
      setAnswers((prevAnswers) =>
        prevAnswers.map((ans) => {
          return answerMade !== answerCorrect
            ? ans.title !== answerCorrect
              ? { ...ans, turned: "false" }
              : { ...ans, turned: "true" }
            : ans.title === answerCorrect && ans.title === answerMade
            ? { ...ans, turned: "true" }
            : { ...ans, turned: "false" };
        })
      );
      console.log(answers);
    }
  };

  const answersMapped = answers.map((ans) => {
    return (
      <Answer
        turned={ans.turned}
        onClick={!ans.title ? () => turnTrue(ans) : () => turnTrue(ans.title)}
        title={ans.title ? decode(ans.title) : decode(ans)}
      />
    );
  });
  return (
    <div className="quiz-block">
      <h3 className="question">{decode(props.question)}</h3>
      <div className="info-block">
        <div>{answersMapped}</div>
        {correctAnswer ? (
          <button
            style={{ backgroundColor: "#13623b", border: 0 }}
            className="checking-button"
            onClick={handleCheck}
          >
            You are right!
          </button>
        ) : (
          <button className="checking-button" onClick={handleCheck}>
            Check
          </button>
        )}
      </div>
    </div>
  );
}
