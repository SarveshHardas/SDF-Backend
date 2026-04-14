# SDF Backend

Production-ready Node.js/Express API with MongoDB.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```bash
cp .env.example .env
```

Edit `.env` with your actual values.

## Development

```bash
npm run dev
```

## Production

```bash
npm start
```

## API Endpoints

- `POST /api/admin/login` - Admin login
- `POST /api/volunteer` - Create volunteer
- `GET /api/volunteer` - Get volunteers (protected)
- `POST /api/internship` - Create internship
- `GET /api/internship` - Get internships (protected)
- `GET /api/events` - Get events
- `POST /api/events` - Create event (protected)
- `PUT /api/events/:id` - Update event (protected)
- `DELETE /api/events/:id` - Delete event (protected)
- `GET /api/teams` - Get teams
- `POST /api/teams` - Create team (protected)
- `PUT /api/teams/:id` - Update team (protected)
- `DELETE /api/teams/:id` - Delete team (protected)
