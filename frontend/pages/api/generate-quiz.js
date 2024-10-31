// pages/api/generate-quiz.js
export default async function handler(req, res) {
  const response = await fetch('http://localhost:8000/generate-quiz', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req.body)
  });
  const data = await response.json();
  res.status(response.status).json(data);
}
