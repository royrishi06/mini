// pages/index.js
import { useState } from 'react';
import Quiz from '../components/Quiz';
import Score from '../components/Score';

export default function Home() {
  const [url, setUrl] = useState('');
  const [quiz, setQuiz] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerateQuiz = async () => {
    setLoading(true);
    setError(null);
    setQuiz(null);
    setScore(null);
    try {
      const response = await fetch('/api/generate-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });
      const data = await response.json();
      if (response.ok) {
        setQuiz(data.quiz);
        setUserAnswers(new Array(data.quiz.length).fill(null)); // Initialize user answers
      } else {
        setError(data.detail || 'Failed to generate quiz');
      }
    } catch (err) {
      setError('Error fetching quiz');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitQuiz = () => {
    const correctScore = userAnswers.filter((answer, index) => answer && answer.is_correct).length;
    const incorrectScore = userAnswers.length - correctScore;
    setScore({ correctScore, incorrectScore });
  };

  return (
    <div className="container">
      <h1>Mini Quiz Generator</h1>
      
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
      />
      <button onClick={handleGenerateQuiz} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Quiz'}
      </button>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {quiz && !score && (
        <Quiz
          quiz={quiz}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
          handleSubmitQuiz={handleSubmitQuiz}
        />
      )}
      
      {score && <Score correctScore={score.correctScore} incorrectScore={score.incorrectScore} />}
    </div>
  );
}
