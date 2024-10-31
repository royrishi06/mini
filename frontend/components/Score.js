// components/Score.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Score({ correctScore, incorrectScore }) {
  const totalQuestions = correctScore + incorrectScore;

  const data = {
    labels: ['Correct', 'Incorrect'],
    datasets: [
      {
        label: 'Number of Questions',
        data: [correctScore, incorrectScore],
        backgroundColor: ['#22c55e', '#ef4444'],
        borderColor: ['#16a34a', '#dc2626'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Quiz Results' },
    },
  };

  return (
    <div>
      <h2>Your Quiz Results</h2>
      <p><strong>Attempted Questions:</strong> {totalQuestions}</p>
      <p><strong>Correct Answers:</strong> {correctScore}</p>
      <p><strong>Incorrect Answers:</strong> {incorrectScore}</p>
      <Bar data={data} options={options} />
    </div>
  );
}
