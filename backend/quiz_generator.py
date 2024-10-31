# quiz_generator.py
import openai
import os
from dotenv import load_dotenv
import requests
from bs4 import BeautifulSoup

# Load environment variables from .env
load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

def extract_text_from_url(url):
    """Extracts main text content from a web page."""
    response = requests.get(url)
    soup = BeautifulSoup(response.content, "html.parser")
    paragraphs = [p.get_text() for p in soup.find_all("p")]
    return "\n".join(paragraphs)

def generate_quiz_from_url(url):
    """Generates a quiz from content extracted from a URL."""
    # Step 1: Extract text from URL
    content = extract_text_from_url(url)
    
    # Step 2: Prepare the prompt and use ChatCompletion API with GPT-4 or GPT-3.5-turbo
    prompt = f"""
    Based on the following content, generate 5 multiple-choice questions. 
    Each question should have one correct answer and three incorrect answers. 

    Content: "{content}"

    Output format:
    1. Question
    - Correct answer
    - Incorrect option 1
    - Incorrect option 2
    - Incorrect option 3
    """
    
    response = openai.chat.completions.create(
        model="gpt-4",  # You can also use "gpt-3.5-turbo"
        messages=[
            {"role": "system", "content": "You are a helpful assistant for generating quizzes."},
            {"role": "user", "content": prompt}
        ],
        max_tokens=700,
        temperature=0.7
    )

    # Corrected access to ChatCompletionMessage content
    quiz_text = response.choices[0].message.content.strip()

    # Parse the response into a structured quiz format
    quiz = []
    questions = quiz_text.split('\n\n')
    for question in questions:
        lines = question.split('\n')
        if len(lines) >= 5:
            quiz.append({
                "question": lines[0],
                "options": [
                    {"text": lines[1], "is_correct": True},
                    {"text": lines[2], "is_correct": False},
                    {"text": lines[3], "is_correct": False},
                    {"text": lines[4], "is_correct": False}
                ]
            })
    
    return quiz
