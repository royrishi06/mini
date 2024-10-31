// components/Quiz.js
import React from 'react';

export default function Quiz({ quiz, userAnswers, setUserAnswers, handleSubmitQuiz }) {
  const handleAnswerSelect = (questionIndex, optionIndex, isCorrect) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[questionIndex] = { optionIndex, is_correct: isCorrect };
    setUserAnswers(updatedAnswers);
  };

  if (!Array.isArray(quiz) || quiz.length === 0) {
    return <p>No quiz data available.</p>;
  }

  return (
    <div>
      <h2>Answer the questions:</h2>
      {quiz.map((item, questionIndex) => (
        <div key={questionIndex}>
          <h3>{item.question}</h3>
          <ul>
            {item.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <label>
                  <input
                    type="radio"
                    name={`question-${questionIndex}`}
                    checked={userAnswers[questionIndex]?.optionIndex === optionIndex}
                    onChange={() => handleAnswerSelect(questionIndex, optionIndex, option.is_correct)}
                  />
                  {option.text}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={handleSubmitQuiz}>Submit Quiz</button>
    </div>
  );
}
