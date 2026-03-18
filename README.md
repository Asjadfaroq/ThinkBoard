## ThinkBoard!

ThinkBoard is a minimal, fast, and elegant note‑taking web app. It lets you create, view, edit, and delete notes with a clean UI powered by React, Tailwind CSS, and DaisyUI, backed by a Node.js/Express API and MongoDB.

**Live application:** <a href="https://thinkboard-hfgb.onrender.com/" target="_blank">https://thinkboard-hfgb.onrender.com/</a>

---

## ✨ Features

- **Create notes**: Quickly add new notes with a title and rich text content.
- **Edit notes**: Open any note in a dedicated details page and update it in place.
- **Delete notes**: Remove notes from the system directly from the detail page.
- **Responsive UI**: Built with Tailwind CSS and DaisyUI for a clean, modern layout on desktop and mobile.
- **Rate limiting**: Upstash‑backed rate limiting on the API to protect the backend.
- **Production‑ready build**: Vite frontend build served by Express in production.

---

## 🧱 Tech Stack

- **Frontend**
  - React (Vite)
  - React Router
  - Tailwind CSS + DaisyUI
  - Axios
- **Backend**
  - Node.js
  - Express
  - MongoDB + Mongoose
  - Upstash Redis + Ratelimit
- **Deployment**
  - Render (Node Web Service)

---

## 📦 Project Structure

```text
ThinkBoard/
├── Backend/
│   ├── src/
│   │   ├── Config/
│   │   ├── Controllers/
│   │   ├── Routes/
│   │   ├── middleware/
│   │   └── server.js        # Express entry point (serves API + built frontend)
│   └── package.json
├── Frontend/
│   ├── src/
│   │   ├── componenets/     # Reusable React components
│   │   ├── pages/           # App pages (Home, Create, Note Detail)
│   │   └── lib/axios.js     # Axios instance
│   ├── index.html
│   └── package.json
├── package.json             # Root scripts for build/start
└── README.md
```

---

## 🚀 Getting Started (Local Development)

### 1. Prerequisites

- Node.js (LTS recommended)
- npm or pnpm
- A MongoDB instance (local or hosted, e.g. MongoDB Atlas)

### 2. Clone the repository

```bash
git clone https://github.com/Asjadfaroq/ThinkBoard.git
cd ThinkBoard
```

### 3. Backend setup

```bash
cd Backend
npm install
```

Create a `.env` file in `Backend/`:

```bash
MONGODB_URI=<your-mongodb-connection-string>
NODE_ENV=development
PORT=5001
UPSTASH_REDIS_URL=<your-upstash-redis-url>
UPSTASH_REDIS_TOKEN=<your-upstash-redis-token>
```

Start the backend:

```bash
npm run dev
```

The API will be available at `http://localhost:5001/api`.

### 4. Frontend setup

In a new terminal:

```bash
cd Frontend
npm install
npm run dev
```

By default, Vite runs at `http://localhost:5173/`.

The frontend is configured to talk to the backend at `http://localhost:5001/api` in development.

---

## 🏗️ Production Build & Run

From the project root:

```bash
# Build frontend and install backend/frontend deps
npm run build

# Start the backend (which also serves the built frontend)
npm start
```

In production, Express serves:

- API under: `/api/notes`
- Built React app from: `Frontend/dist`

When deployed (for example, on Render), the application is available at:

**`https://thinkboard-hfgb.onrender.com/`**

---

## 🔐 Rate Limiting

The API is protected using Upstash Ratelimit and Redis.  
Requests are throttled via middleware in `Backend/src/middleware/rateLimiter.js` to prevent abuse and keep the app responsive.

If you hit the limit, the API responds with **HTTP 429** and the frontend displays a friendly, dedicated rate‑limit UI.

---

## 🧪 Key Endpoints

All endpoints are prefixed with `/api/notes`:

- `GET /api/notes` – Get all notes
- `GET /api/notes/:id` – Get a single note by ID
- `POST /api/notes` – Create a new note
- `PUT /api/notes/:id` – Update an existing note
- `DELETE /api/notes/:id` – Delete a note

---

## 💡 Development Notes

- Frontend routing is handled by React Router.
- The note detail page supports **edit** and **delete** actions.
- Toast notifications (via `react-hot-toast`) provide immediate feedback for all CRUD operations.

---

## 🌐 Live Demo

You can try the live version here:

👉 **[ThinkBoard on Render](https://thinkboard-hfgb.onrender.com/)**  

Create a few notes, edit them, and experience the full flow end‑to‑end.

---

## 📄 License

This project is open‑source. Feel free to fork, experiment, and adapt it to your own use cases.

