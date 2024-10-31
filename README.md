#mini

A simplistic interface of quiz-based learning

###Prerequisites

cd mini_backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload


cd mini_frontend
bun install
bun run dev
