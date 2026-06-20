# AI & Robotics Summer Workshop — Landing Page

A full-stack, Kidrove-inspired landing page for a kids' AI & Robotics workshop.
Bright gradients, rounded playful cards, a custom robot mascot, smooth
animations, a working registration form, and an Express + MongoDB backend.

```
workshop-landing/
├── frontend/   React 18 + TypeScript + Tailwind CSS + Framer Motion
├── backend/    Express + TypeScript + Mongoose (MongoDB)
└── README.md   (this file)
```

---

## 1. Tech Stack

| Layer    | Technology |
|----------|------------|
| Frontend | React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, React Hook Form + Zod, Axios |
| Backend  | Node.js, Express, TypeScript, Mongoose (MongoDB), Zod, Helmet, CORS, express-rate-limit |
| Database | MongoDB (optional — API gracefully falls back to in-memory storage if not configured) |

---

## 2. Folder Structure

### Frontend (`/frontend`)

```
frontend/
├── src/
│   ├── api/             # Axios client + API call functions (enquiryApi.ts)
│   ├── components/      # Reusable UI components (Hero, Navbar, FAQ, Form, etc.)
│   ├── hooks/            # useCountdown, useScrolled
│   ├── pages/            # LandingPage.tsx (composes all sections)
│   ├── types/            # Shared TypeScript interfaces
│   ├── utils/            # constants, zod validation schema, scroll helper
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html             # SEO meta tags + Google Fonts
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

### Backend (`/backend`)

```
backend/
├── src/
│   ├── config/db.ts                  # MongoDB connection (optional)
│   ├── models/Enquiry.ts             # Mongoose schema
│   ├── controllers/enquiryController.ts
│   ├── routes/enquiryRoutes.ts
│   ├── middleware/
│   │   ├── validateEnquiry.ts        # Zod request validation
│   │   ├── rateLimiter.ts
│   │   └── errorHandler.ts
│   ├── utils/
│   │   ├── enquiryValidation.ts      # Zod schema (shared shape with frontend)
│   │   └── inMemoryStore.ts          # Fallback store when no DB is configured
│   ├── app.ts                        # Express app (middleware + routes)
│   └── server.ts                     # Entry point
└── package.json
```

---

## 3. Local Setup

### Prerequisites
- Node.js 18+
- npm
- (Optional) A MongoDB connection string — local or [MongoDB Atlas](https://www.mongodb.com/atlas)

### Backend

```bash
cd backend
cp .env.example .env     # then edit values as needed
npm install
npm run dev               # starts on http://localhost:5000 with auto-reload
```

If `MONGODB_URI` is left blank in `.env`, the API still works — enquiries are
logged to the console and kept in memory for the life of the process (handy
for local testing without setting up a database).

### Frontend

```bash
cd frontend
cp .env.example .env       # set VITE_API_BASE_URL if backend isn't on :5000
npm install
npm run dev                 # starts on http://localhost:5173
```

Open `http://localhost:5173` in your browser. Submitting the registration
form will call the backend's `POST /api/enquiry` endpoint.

### Production builds

```bash
# Frontend
cd frontend && npm run build      # outputs to frontend/dist

# Backend
cd backend && npm run build       # compiles TS to backend/dist
npm start                          # runs compiled JS
```

---

## 4. Environment Variables

### `frontend/.env`

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Base URL of the backend API | `http://localhost:5000` |

### `backend/.env`

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Port the Express server listens on | `5000` |
| `CLIENT_ORIGIN` | Comma-separated allowed CORS origins | `http://localhost:5173,https://your-app.vercel.app` |
| `MONGODB_URI` | MongoDB connection string (optional) | `mongodb+srv://user:pass@cluster.mongodb.net/workshop_db` |
| `NODE_ENV` | `development` or `production` | `development` |

---

## 5. API Reference

### `POST /api/enquiry`

Registers a new workshop enquiry.

**Request body**
```json
{
  "name": "Aarav Kapoor",
  "email": "aarav@example.com",
  "phone": "9876543210"
}
```

**Validation rules**
- `name` — required, 2–80 characters, letters only
- `email` — required, valid email format
- `phone` — required, at least 10 digits (digits, spaces, `+`, `-` allowed)

**Success response — `201`**
```json
{
  "success": true,
  "message": "Thanks! Your registration has been received. We'll be in touch shortly.",
  "data": { "id": "...", "name": "...", "email": "...", "phone": "..." }
}
```

**Validation error — `400`**
```json
{
  "success": false,
  "message": "Please fix the errors below and try again.",
  "errors": { "email": "Please provide a valid email address" }
}
```

### `GET /api/enquiry`

Lists submitted enquiries (most recent first). Useful for a basic admin view
or for verifying submissions during development.

### `GET /api/health`

Simple health check, returns `{ success: true, status: "ok" }`.

---

## 6. MongoDB Schema

Collection: `enquiries`

| Field       | Type     | Notes                                       |
|-------------|----------|----------------------------------------------|
| `name`      | String   | required, trimmed, 2–80 chars                |
| `email`     | String   | required, trimmed, lowercased, validated     |
| `phone`     | String   | required, trimmed, 10–15 chars               |
| `workshop`  | String   | defaults to "AI & Robotics Summer Workshop"  |
| `createdAt` | Date     | auto (timestamps)                            |
| `updatedAt` | Date     | auto (timestamps)                            |

Defined in `backend/src/models/Enquiry.ts` using Mongoose. An index on
`{ email: 1, createdAt: -1 }` is included for faster lookups.

---

## 7. Deployment

### Frontend → Vercel

1. Push the `frontend/` folder to a Git repository (or the whole monorepo —
   Vercel lets you set a root directory).
2. In Vercel: **New Project → Import Repo**.
3. Set **Root Directory** to `frontend`.
4. Framework preset: **Vite**. Build command: `npm run build`. Output dir: `dist`.
5. Add environment variable `VITE_API_BASE_URL` = your deployed backend URL
   (e.g. `https://your-backend.onrender.com`).
6. Deploy.

### Backend → Render

1. Push the `backend/` folder to a Git repository.
2. In Render: **New → Web Service → connect repo**.
3. Set **Root Directory** to `backend`.
4. Build command: `npm install && npm run build`
5. Start command: `npm start`
6. Add environment variables: `PORT` (Render sets this automatically, but
   the app also respects it), `CLIENT_ORIGIN` (your Vercel URL),
   `MONGODB_URI` (your Atlas connection string), `NODE_ENV=production`.
7. Deploy. Once live, copy the Render URL into the frontend's
   `VITE_API_BASE_URL` and redeploy the frontend.

### MongoDB Atlas (optional but recommended for production)

1. Create a free cluster at https://www.mongodb.com/atlas.
2. Create a database user and allow network access from `0.0.0.0/0` (or
   Render's IPs) under **Network Access**.
3. Copy the connection string into `MONGODB_URI`.

---

## 8. Design Notes

- **Palette**: coral (`#ff5a4d`), violet (`#6c4ef2`), teal (`#0aab98`), sun
  yellow (`#ffc61f`) on a warm cream background — playful but legible.
- **Type**: "Baloo 2" for display headings (rounded, kid-friendly),
  "Nunito" for body copy (clean, readable).
- **Signature element**: a custom-illustrated robot mascot reused across the
  hero, registration section, and footer to give the page one consistent,
  memorable character.
- Animations respect `prefers-reduced-motion`, and all interactive elements
  have visible keyboard focus states.

---

## 9. Bonus Features Implemented

- ✅ TypeScript on both frontend and backend
- ✅ React Hook Form + Zod validation (mirrored on the backend with Zod too)
- ✅ Framer Motion scroll/hover/page animations
- ✅ Animated FAQ accordion
- ✅ Sticky mobile CTA bar (appears after scrolling)
- ✅ Testimonials section
- ✅ Live countdown timer to the workshop start date
- ✅ Responsive Navbar + Footer
- ✅ SEO meta tags (title, description, Open Graph, Twitter card)
- ✅ Rate limiting + Helmet security headers on the API
- ✅ Graceful in-memory fallback when MongoDB isn't configured
