# main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from quiz_generator import generate_quiz_from_url

from starlette.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Update with the frontend origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class QuizRequest(BaseModel):
    url: str

@app.post("/generate-quiz")
async def generate_quiz(request: QuizRequest):
    try:
        quiz = generate_quiz_from_url(request.url)
        return {"quiz": quiz}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/")
async def root():
    return {"message": "Welcome to the Quiz Generator API"}
