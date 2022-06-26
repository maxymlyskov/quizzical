import { useEffect, useState } from "react";
import Quiz from "./components/Quiz";
import Welcome from "./components/Welcome";

function App() {
  const [showGame, setShowGame] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [newQuestions, setNewQuestions] = useState(false);

  useEffect(() => {
    async function getQuestions() {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=5&category=9"
      );
      let { results } = await res.json();

      setQuestions(results);
    }
    getQuestions();
  }, [newQuestions]);

  function randomArrayShuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  const quizes =
    questions &&
    questions.map((q) => {
      console.log(q.correct_answer);
      return (
        <Quiz
          correct={q.correct_answer}
          answers={randomArrayShuffle([
            ...q.incorrect_answers,
            q.correct_answer,
          ])}
          key={q.question}
          correct_answer={q.correct_answer}
          question={q.question}
        />
      );
    });
  const handleNew = () => {
    setNewQuestions((prevQuestions) => {
      return !prevQuestions;
    });
  };
  return (
    <div className="App">
      {showGame ? (
        <div className="quizes-block">{quizes}
      <button className="check-button" onClick={handleNew}>
        New questions
      </button>
        </div>
      ) : (
        <Welcome onClick={() => setShowGame(true)} />
      )}
    </div>
  );
}

export default App;
