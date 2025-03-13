import { useState, useEffect } from "react";

function Quiz({ data, questionNumber, setStop, setQuestionNumber, moneyList }) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState(null);
  const [timer, setTimer] = useState(30);
  const [earnedAmount, setEarnedAmount] = useState("₹0");

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(1000, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    });
    delay(4000, () => {
      if (a.correct) {
        setQuestionNumber((prev) => prev + 1);
        setSelectedAnswer(null);
        setTimer(30);
        setEarnedAmount(moneyList[questionNumber - 1]?.amount || "₹0");
      } else {
        setStop(true);
      }
    });
  };

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
    setTimer(30);
  }, [data, questionNumber]);

  useEffect(() => {
    if (timer === 0) {
      setStop(true);
    }
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setStop]);

  return (
    <div>
      <div className="Quiz">
        <div className="question">
          
          {question?.question}
        </div>
        <div className="answers">
          {question?.answers?.length > 0 ? (
            question.answers.map((a, index) => (
              <div
                key={index}
                className={selectedAnswer === a ? className : "answer"}
                onClick={() => handleClick(a)}
              >
                {a.text}
              </div>
            ))
          ) : (
            <p>Loading answers...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
