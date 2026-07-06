# DevTrack

DevTrack is a robust, lightweight project management application built to streamline engineering workflows. Designed with a focus on real-time agility and scalable data structures, the platform features a dynamic task board, advanced multi-parameter filtering, and an adaptable data engine.

---

## 🚀 Key Features & Architecture

### 📊 Dynamic Project Boards
*   **Asynchronous Board Engine:** Built using React and Node.js backend concepts to handle state transitions dynamically across customizable workflow stages (e.g., To Do, In Progress, QA, Complete).
*   **Optimistic UI Layer:** Front-end state updates instantly upon user interaction with fallback state rollbacks if server validation or network requests fail.

### 🗄️ Relational Data & Adaptable Schema
*   **Django REST Framework Backend:** Powered by Python and DRF to provide structured, secure JSON payloads via clear serialization layers.
*   **Entity-Attribute-Value (EAV) Engine:** Engineered using an EAV pattern over a relational SQLite database. This allows users to generate custom fields (e.g., Bug Severity, Branch ID, Budget) dynamically without requiring structural migrations to the underlying database tables.
*   **Data Integrity & Validation:** Built using strict data type validation to filter and clean messy inputs at the API gateway prior to database commit.

### 🔍 Advanced Filter Logic
*   **Dynamic Combination Queries:** Implements optimized Python backend filtering utilizing Django `Q` objects to parse complex, multi-parameter searches (e.g., tracking specific assignees, urgency metrics, and tags concurrently).

---

## 🛠️ Tech Stack

*   **Frontend:** React (Vite), JavaScript, Tailwind CSS
*   **Backend:** Python, Django REST Framework (DRF)
*   **Database:** SQLite (Relational Schema)
*   **Version Control:** Git, GitHub

---

## 📂 Project Structure

```text
├── backend/               # Django REST Framework Application
│   ├── api/               # API endpoints, views, and serializers
│   ├── models/            # Relational database models (Core & EAV)
│   └── manage.py          # Django management script
└── frontend/              # React Vite Application
    ├── src/
    │   ├── components/    # Reusable UI components (Boards, Cards, Forms)
    │   ├── hooks/         # Custom React hooks for optimistic state logic
    │   └── App.jsx        # Main application routing and core state
```


## 1. Backend Setup (Django)
Navigate to the backend directory, initialize a virtual environment, and install dependencies:

```Bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
pip install -r requirements.txt
```

## Run database migrations and start the development server:

```Bash
python manage.py migrate
python manage.py runserver
```

The backend API will run at http://127.0.0.1:8000/.

## 2. Frontend Setup (React)
Navigate to the frontend directory, install dependencies, and start the development server:

```Bash
cd ../frontend
npm install
npm run dev
```
The frontend application will run at http://localhost:5173/.

## 🐙 Git Workflow & Sustainable Development
* This repository follows standard professional engineering practices:
* Feature Branching: Main branches are kept clean; features are developed on isolated branches (e.g., feature/eav-custom-fields) before undergoing testing and merging.
* Technical Debt Minimization: Code is written cleanly with a focus on modularity, readability, and extensive documentation to ensure sustainable future development.
