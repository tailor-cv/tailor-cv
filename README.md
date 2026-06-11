# TailorCV

AI-powered CV tailoring tool that helps job seekers beat ATS filters.

Paste your CV + a job description → get a tailored CV with improved 
keyword match, rewritten bullet points, and an ATS score.

## Stack
- **Backend:** Python, FastAPI, Anthropic API, PyMuPDF
- **Frontend:** Vite, React, TypeScript, Tailwind CSS, shadcn/ui

## Project structure
```
tailor-cv/
├── backend/    # FastAPI API (uv-managed)
└── frontend/   # Vite + React app (landing page + product)
```

## Getting started

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
uv sync
uv run uvicorn main:app --reload
```

## Status
🚧 In active development
