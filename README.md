<div align="center">

# mini

A simplistic interface of quiz-based learning
</div>

### How to local dev?

#### Prerequisites:
```bash
# install bun
curl -fsSL https://bun.sh/install | bash

# install uv
curl -LsSf https://astral.sh/uv/install.sh | sh

# set up the right keys in .env files inside frontend and backend
# frontend -> .env.local
# backend -> .env
```


### Frontend:
```
cd frontend  
bun install  
bun run dev  
```
### Backend:
```
cd backend  
python3 -m venv venv  
source venv/bin/activate  
pip install -r requirements.txt  
uvicorn main:app --reload  
```

### Quiz Interface and Results

The following images illustrate the different parts of the quiz interface and results page for the Mini Quiz Generator application.

#### 1. Initial Quiz Page
![Initial Quiz Page](path/to/Screenshot_from_2024-10-31_19-07-45.png)

This is the initial interface where users can enter a URL and click on the "Generate Quiz" button. Once a URL is provided, the quiz will generate questions based on the content of the provided page.

#### 2. Quiz Question Page
![Quiz Question Page](path/to/Screenshot_from_2024-10-31_19-10-56.png)

After clicking "Generate Quiz," users are presented with a series of questions generated from the URL’s content. Each question has one correct answer and multiple incorrect options, allowing users to test their knowledge based on the material provided.

#### 3. Quiz Results Page
![Quiz Results Page](path/to/Screenshot_from_2024-10-31_19-13-42.png)

Once the quiz is completed, users are shown their results, including the number of attempted questions, correct answers, and incorrect answers. A bar chart visualizes the correct and incorrect answers for quick reference.


## Target Audience
**Students**: generate quizzes on the fly!

