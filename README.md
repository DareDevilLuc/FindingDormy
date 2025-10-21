# FindingDormy
A platform for convenience that aims to help users find dormmates in order to fill their living space or to find living spaces themselves, matching with other people that fits their preferences through filters.

## Technologies Used
* **Frontend:** Vue 3, Vite, Tailwind
* **Backend:** Node.js + Express.js, PostgreSQL, Nodemon for live reload during development

## Setup
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/DareDevilLuc/FindingDormy.git
   cd FindingDormy
   ```
2. **Install Dependencies:** Run these commands
   ```bash
   npm install
   npm install --prefix frontend
   npm install --prefix backend
   ```
## Project Structure
The repository is made with two main directories:
* **`frontend/`:** Where the Vue 3 components are located.
* **`backend/`:** Where the Node.js and Express.js making use of PostgreSQL are located.

## Running the project locally
After having installed the dependencies on the root, `frontend/` and `backend/` directories, enter the command:
```bash
npm run dev
```
- `frontend/` runs on: http://localhost:5173
- `backend/` runs on: http://localhost:3000

Both will run together as `concurrently` allows both servers to run together with a single command.
