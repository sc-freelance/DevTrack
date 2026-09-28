# DevTrack

A full-stack project tracking app with a Kanban-style dashboard, built with **React (Vite)** on the front end and a **Django REST Framework** API on the back end.

I built DevTrack to practise designing a REST API from scratch, modelling relational data in Django, and connecting it to a modern React front end.

## Features

- **Kanban dashboard** – projects are grouped into *To Do*, *In Progress* and *Completed* columns based on their status.
- **Create and delete projects** – a modal form sends new projects to the API, with a starting status column; projects can be deleted from the board.
- **Live project stats** – the API annotates each project with a `task_count` using Django ORM aggregation (`Count`), and the dashboard shows totals per status.
- **Search** – filter projects on the dashboard as you type.
- **Validation** – the serializer rejects duplicate project titles with a clear error message.
- **Multi-page navigation** – React Router with a sidebar layout, plus dashboard, settings and login pages.

## Tech stack

| Layer | Tools |
| --- | --- |
| Front end | React 19, Vite, React Router, Axios, Tailwind CSS, shadcn/ui components |
| Back end | Python, Django, Django REST Framework, django-cors-headers |
| Database | SQLite |

## API endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/projects/` | List all projects (with task counts) |
| POST | `/api/projects/` | Create a project |
| GET | `/api/projects/<id>/` | Get a single project |
| PUT / PATCH | `/api/projects/<id>/` | Update a project |
| DELETE | `/api/projects/<id>/` | Delete a project |

## Data model

- **Project** – title, description, status, created date, optional owner
- **Task** – belongs to a project; has a priority (Low / Medium / High), owner and optional category
- **Category** – name with an auto-generated URL slug
- **Developer** – links users to the tasks they're assigned

## Project structure

```text
DevTrack/
├── backend/
│   ├── config/        # Django settings and root URLs
│   ├── projects/      # Models, serializers, views and URLs for the API
│   ├── core/          # Health-check view and tests
│   └── manage.py
└── frontend/
    └── src/
        ├── components/  # Dashboard, Kanban board, modals, layout, UI components
        ├── pages/       # Login, settings, categories
        ├── services/    # Axios API client
        └── App.jsx      # Routing
```

## Running locally

**Back end** (http://127.0.0.1:8000)

```bash
cd backend
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install django djangorestframework django-cors-headers
python manage.py migrate
python manage.py runserver
```

**Front end** (http://localhost:5173)

```bash
cd frontend
npm install
npm run dev
```

## Current status and roadmap

DevTrack is a work in progress. Next steps:

- [ ] Task endpoints (the `Task` model exists; the API currently covers projects)
- [ ] Moving projects between columns from the board (the API already supports updates)
- [ ] Authentication – the login page is UI only so far
- [ ] Categories page and rich-text descriptions (Tiptap editor started)
- [ ] Expand the test suite and add a `requirements.txt`
- [ ] Move `SECRET_KEY` and `DEBUG` into environment variables

## What I learned

- Designing REST endpoints with DRF generic views (`ListCreateAPIView`, `RetrieveUpdateDestroyAPIView`)
- Using ORM aggregation (`annotate` + `Count`) to send computed data to the front end
- Evolving a schema safely through Django migrations
- Structuring a React app with routing, reusable components and a central API client
